"use client";

import { useEffect, useRef } from "react";

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// Domain-warped noise in ember, deep tide and steel over a night base.
// The cursor adds a soft warm bloom where it rests.
const FRAGMENT = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseOn;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = uv;
  p.x *= aspect;

  float t = uTime * 0.035;
  vec2 q = vec2(fbm(p * 1.3 + vec2(0.0, t)), fbm(p * 1.3 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(
    fbm(p * 1.1 + 2.2 * q + vec2(1.7, 9.2) + t * 1.4),
    fbm(p * 1.1 + 2.2 * q + vec2(8.3, 2.8) - t)
  );
  float f = fbm(p * 1.05 + 2.6 * r);

  vec3 base = vec3(0.027, 0.031, 0.055);
  vec3 tide = vec3(0.02, 0.27, 0.30);
  vec3 steel = vec3(0.11, 0.22, 0.50);
  vec3 ember = vec3(1.0, 0.42, 0.29);

  vec3 col = base;
  col = mix(col, steel, smoothstep(0.4, 0.95, f) * 0.6);
  col = mix(col, tide, smoothstep(0.3, 0.9, length(q)) * 0.62);
  col = mix(col, ember, smoothstep(0.48, 0.95, r.x * f * 1.7) * 0.95);
  // Hot filaments where the field folds over itself.
  col += ember * pow(smoothstep(0.55, 1.0, f), 3.0) * 0.45;

  vec2 m = uMouse;
  m.x *= aspect;
  float d = distance(p, m);
  col += ember * 0.3 * exp(-d * d * 6.0) * uMouseOn;

  // Keep the left side and the bottom deep so the type reads cleanly.
  float lift = smoothstep(0.0, 0.95, uv.x * 0.85 + uv.y * 0.5);
  col *= mix(0.3, 1.4, lift);
  col *= smoothstep(0.0, 0.4, uv.y) * 0.55 + 0.45;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Renders at a fraction of the CSS size. The field is soft by nature, so the
// upscale is invisible and the GPU cost stays small on phones.
const RENDER_SCALE = 0.4;

// The canvas is created inside the effect and removed in its cleanup. With
// cacheComponents, Next keeps a page mounted but hidden (React Activity) when
// you navigate away, runs effect cleanups, then re-runs the effects on the
// same DOM when you come back. A canvas rendered by React would survive that
// with its context already released, and a released context cannot draw
// again. A fresh canvas per activation always gets a live context. Until it
// has drawn, the dark CSS field on .hero-bg is what shows.
export default function Aurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    const canvas = document.createElement("canvas");
    canvas.className = "aurora-canvas";
    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    const release = () => gl.getExtension("WEBGL_lose_context")?.loseContext();
    if (!vs || !fs || !program) {
      release();
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      release();
      return;
    }
    gl.useProgram(program);
    layer.appendChild(canvas);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uMouseOn = gl.getUniformLocation(program, "uMouseOn");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    // Mouse target and an eased follower, in 0..1 canvas space.
    const target = { x: 0.72, y: 0.6, on: 0 };
    const eased = { x: 0.72, y: 0.6, on: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Hidden (display: none) reports zero. Keep the last good size.
      if (rect.width === 0 || rect.height === 0) return;
      const w = Math.max(1, Math.round(rect.width * RENDER_SCALE));
      const h = Math.max(1, Math.round(rect.height * RENDER_SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    // A fixed starting time gives a composed first frame instead of noise
    // that is still gathering itself.
    const T0 = 40;
    let raf = 0;
    let reveal = 0;
    let visible = true;
    let running = false;
    let lost = false;
    let last = performance.now();
    let time = T0;

    const draw = () => {
      if (lost) return;
      eased.x += (target.x - eased.x) * 0.06;
      eased.y += (target.y - eased.y) * 0.06;
      eased.on += (target.on - eased.on) * 0.05;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, eased.x, eased.y);
      gl.uniform1f(uMouseOn, eased.on);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const frame = (now: number) => {
      time += Math.min(now - last, 50) / 1000;
      last = now;
      draw();
      raf = requestAnimationFrame(frame);
    };

    const play = () => {
      if (running || lost || reduce.matches || !visible || document.hidden)
        return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    draw();
    // Flip to ready on the next frame so the fade in actually transitions.
    reveal = requestAnimationFrame(() => {
      if (!lost) canvas.dataset.ready = "true";
    });
    play();

    // If the GPU drops the context, fade back to the CSS field rather than
    // leaving a dead canvas on top of it.
    const onLost = () => {
      lost = true;
      pause();
      delete canvas.dataset.ready;
    };
    canvas.addEventListener("webglcontextlost", onLost);

    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVisibility);

    const onMotionPref = () => {
      if (reduce.matches) {
        pause();
        draw();
      } else play();
    };
    reduce.addEventListener("change", onMotionPref);

    // The canvas sits under the content, so listen on the whole hero.
    const host = canvas.closest("section") ?? canvas.parentElement;
    const onMove = (e: PointerEvent) => {
      if (!finePointer.matches || reduce.matches) return;
      const rect = canvas.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = 1 - (e.clientY - rect.top) / rect.height;
      target.on = 1;
    };
    const onLeave = () => {
      target.on = 0;
    };
    host?.addEventListener("pointermove", onMove);
    host?.addEventListener("pointerleave", onLeave);

    return () => {
      pause();
      cancelAnimationFrame(reveal);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", onMotionPref);
      host?.removeEventListener("pointermove", onMove);
      host?.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.remove();
      release();
    };
  }, []);

  return <div ref={ref} className="aurora" aria-hidden="true" />;
}

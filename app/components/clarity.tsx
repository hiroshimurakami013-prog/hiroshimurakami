"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

// Microsoft Clarity via the official npm package. Initialises once on the
// client, on every page.
const CLARITY_PROJECT_ID = "zc4o4h610v";

export default function ClarityInit() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);
  return null;
}

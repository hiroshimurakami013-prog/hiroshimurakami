import {
  Calculator,
  ChatsCircle,
  Funnel,
  Headset,
  PaperPlaneTilt,
  Robot,
  TreeStructure,
  Waveform,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { ServiceSlug } from "@/content/services";

export const SERVICE_ICONS: Record<ServiceSlug, Icon> = {
  "ai-receptionist": Headset,
  "custom-voice-agents": Waveform,
  "ai-agents": Robot,
  "ai-follow-ups": PaperPlaneTilt,
  "ai-lead-qualification": Funnel,
  "custom-crm-and-workflows": TreeStructure,
  "ai-customer-support": ChatsCircle,
  "ai-accounting": Calculator,
};

import { syncAnannas } from "../scripts/anannas/index";
import { syncGroq } from "../scripts/groq";
import { syncOpenRouter } from "../scripts/openrouter";

export const providers = [
  { name: "Anannas", fn: syncAnannas },
  { name: "OpenRouter", fn: syncOpenRouter },
  { name: "Groq", fn: syncGroq },
] as const;

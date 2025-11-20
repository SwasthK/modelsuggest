import { syncAnannas } from "../scripts/anannas/index"
import { syncOpenRouter } from "../scripts/openrouter";

export const providers = [
    { name: "Anannas", fn: syncAnannas },
    { name: "OpenRouter", fn: syncOpenRouter },
] as const;
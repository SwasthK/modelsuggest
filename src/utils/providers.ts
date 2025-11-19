import { syncAnannas } from "../scripts/anannas/index"

export const providers = [
    { name: "Anannas", fn: syncAnannas },
] as const;
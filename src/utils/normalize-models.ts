export function normalizeModels(list: string[]) {
    return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b));
}
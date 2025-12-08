export function validateEnv(
  envs: Record<string, string | undefined>,
): Record<string, string> {
  for (const [key, value] of Object.entries(envs)) {
    if (!value) throw new Error(`Environment variable ${key} is required`);
  }
  return envs as Record<string, string>;
}

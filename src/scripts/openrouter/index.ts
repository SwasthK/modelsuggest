import path from "path";
import { writeModelsFile } from "../../utils/write-models-file";
import { normalizeModels } from "../../utils/normalize-models";
import { validateEnv } from "../../utils/validate-env";

async function fetchOpenRouter() {
  const envs = validateEnv({ OPENROUTER_API_URL: process.env.OPENROUTER_API_URL });
  const { OPENROUTER_API_URL } = envs;
  
  const res = await fetch(OPENROUTER_API_URL, { method: "GET" as const });
  if (!res.ok) {
    throw new Error(`OpenRouter fetch failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  const ids = Array.isArray(json) ? json.map((x: any) => x.id ?? x) : (json.data ? json.data.map((d: any) => d.id) : []);
  return ids.filter(Boolean).filter((id: string) => id !== "*/*");
}

export async function syncOpenRouter() {
  try {
    const ids = await fetchOpenRouter();
    const models = normalizeModels(ids);
    const outPath = path.join(process.cwd(), "src/openrouter/models.ts");
    writeModelsFile(outPath, models);
    console.log(`OpenRouter: wrote ${models.length} models to ${outPath}`);
  } catch (err) {
    throw new Error(`syncOpenRouter failed: ${err}`);
  }
}

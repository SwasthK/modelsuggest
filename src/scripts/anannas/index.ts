import path from "path";
import { writeModelsFile } from "../../utils/write-models-file";
import { normalizeModels } from "../../utils/normalize-models";
import { validateEnv } from "../../utils/validate-env";

async function fetchAnannas() {
  const envs = validateEnv({ ANANNAS_API_URL: process.env.ANANNAS_API_URL });
  const { ANANNAS_API_URL } = envs;
  
  const res = await fetch(ANANNAS_API_URL, { method: "GET" as const });
  if (!res.ok) {
    throw new Error(`Anannas fetch failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  const ids = Array.isArray(json) ? json.map((x: any) => x.id ?? x) : (json.data ? json.data.map((d: any) => d.id) : []);
  return ids.filter(Boolean).filter((id: string) => id !== "*/*");
}

export async function syncAnannas() {
  try {
    const ids = await fetchAnannas();
    const models = normalizeModels(ids);
    const outPath = path.join(process.cwd(), "src/models/anannas/models.ts");
    writeModelsFile(outPath, models);
    console.log(`Anannas: wrote ${models.length} models to ${outPath}`);
  } catch (err) {
    throw new Error(`syncAnannas failed: ${err}`);
  }
}

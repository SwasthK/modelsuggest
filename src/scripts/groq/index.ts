import path from "path";
import { writeModelsFile } from "../../utils/write-models-file";
import { normalizeModels } from "../../utils/normalize-models";
import { validateEnv } from "../../utils/validate-env";

async function fetchGroq() {
  const envs = validateEnv({
    GROQ_API_URL: process.env.GROQ_API_URL,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  });

  const { GROQ_API_URL, GROQ_API_KEY } = envs;

  const res = await fetch(GROQ_API_URL, {
    method: "GET" as const,
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Groq fetch failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  const ids = Array.isArray(json)
    ? json.map((x: any) => x.id ?? x)
    : json.data
      ? json.data.map((d: any) => d.id)
      : [];
  return ids.filter(Boolean).filter((id: string) => id !== "*/*");
}

export async function syncGroq() {
  try {
    const ids = await fetchGroq();
    const models = normalizeModels(ids);
    const outPath = path.join(process.cwd(), "src/models/groq/models.ts");
    writeModelsFile(outPath, models);
    console.log(`Groq: wrote ${models.length} models to ${outPath}`);
  } catch (err) {
    throw new Error(`syncGroq failed: ${err}`);
  }
}

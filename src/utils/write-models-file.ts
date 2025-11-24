import fs from "fs";

export function writeModelsFile(filePath: string, models: string[]) {
  const modelsArray = models.map(m => `    "${m}"`).join(",\n");
  const content = `const MODELS = [\n${modelsArray}\n] as const;

export type Model = (typeof MODELS)[number];

export const model = MODELS.reduce((acc, m) => {
    acc[m] = m;
    return acc;
}, {} as Record<Model, Model>);
`;
  fs.writeFileSync(filePath, content + "\n", { encoding: "utf8" });
}

import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "anannas/index": "src/models/anannas/index.ts",
    "openrouter/index": "src/models/openrouter/index.ts",
    "groq/index": "src/models/groq/index.ts",
  },
  format: ["cjs"],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: "dist",
});

#!/usr/bin/env node

import { providers } from "../utils/providers";

async function main() {
  for (const p of providers) {
    try {
      console.log(`→ [${p.name}] sync starting...`);
      await p.fn();
      console.log(`→ [${p.name}] sync finished`);
    } catch (err) {
      console.error(`❌ [${p.name}] sync failed:`, err);
      process.exitCode = 1;
      throw err;
    }
  }

  console.log("✔ All provider syncers completed");
}

main().catch(err => {
  console.error("Sync process failed:", err);
  process.exit(1);
});

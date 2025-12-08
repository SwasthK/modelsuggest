# modelsuggest

A TypeScript library providing AI model names for various providers with full type safety.

## Installation

```bash
bun add modelsuggest
# or
pnpm add modelsuggest
# or
yarn add modelsuggest
# or
npm install modelsuggest
```

## Usage

Import models from your preferred provider:

```typescript
import { Model, model } from "modelsuggest/anannas";
// or
import { Model, model } from "modelsuggest/openrouter";
...
```

### Example

```typescript
import { Model, model } from "modelsuggest/anannas";

// Use the type for type-safe model names
function useModel(modelName: Model) {
  console.log(`Using model: ${modelName}`);
}

// Access all models via the model object
useModel(model["anthropic/claude-3.5-sonnet"]);
```

## Available Providers

- **[anannas](https://anannas.ai)** - `modelsuggest/anannas`
- **[openrouter](https://openrouter.ai)** - `modelsuggest/openrouter`
- **[groq](https://groq.com)** - `modelsuggest/groq`

## Features

- ✅ Full TypeScript support with type-safe model names
- ✅ Auto-complete for all available models
- ✅ Lightweight and tree-shakeable
- ✅ Automatically synced with provider APIs

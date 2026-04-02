const MODELS = [
    "claude-haiku-4.5",
    "claude-opus-4",
    "claude-opus-4.1",
    "claude-opus-4.5",
    "claude-opus-4.6",
    "claude-sonnet-4",
    "claude-sonnet-4.5",
    "claude-sonnet-4.6",
    "codestral",
    "deepseek-chat",
    "deepseek-reasoner",
    "fireworks/deepseek-v3",
    "fireworks/llama-3.3-70b",
    "fireworks/qwen-2.5-72b",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.5-pro",
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
    "gpt-4o",
    "gpt-4o-mini",
    "gpt-5",
    "gpt-5-mini",
    "grok-3",
    "grok-3-fast",
    "grok-3-mini",
    "grok-4-fast",
    "grok-4-fast-reasoning",
    "groq/deepseek-r1-distill-70b",
    "groq/gemma2-9b",
    "groq/llama-3.1-8b",
    "groq/llama-3.3-70b",
    "lilac/kimi-k2-5",
    "mistral-large",
    "mistral-medium",
    "mistral-small",
    "o3",
    "o4-mini",
    "qwen-max",
    "qwen-plus",
    "qwen-turbo",
    "together/deepseek-r1",
    "together/deepseek-v3",
    "together/llama-3.3-70b",
    "together/qwen-2.5-72b"
] as const;

export type Model = (typeof MODELS)[number];

export const model = MODELS.reduce((acc, m) => {
    acc[m] = m;
    return acc;
}, {} as Record<Model, Model>);


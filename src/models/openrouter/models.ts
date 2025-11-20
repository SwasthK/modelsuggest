const MODELS = [] as const;

export type Model = (typeof MODELS)[number];

export const model = MODELS.reduce((acc, m) => {
    acc[m] = m;
    return acc;
}, {} as Record<Model, Model>);

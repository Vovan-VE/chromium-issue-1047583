// REFACT: nominal types TS#202
export type IdOf<T extends string> = number & { _type: T };

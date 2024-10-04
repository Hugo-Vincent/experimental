export type TDate = `${string}-${string}-${string}`;
export type TObjectKey = string | number | symbol;
export type TObject = { [P in TObjectKey]: TAny } ;
export type TAny =
  TObjectKey
  | TObject
  | null
  | TAny[];

/**
 * Type alias for a map where not all keys of the given set of keys have to be defined.
 */
export type TIndexableKey<K extends keyof T, T> = T[K] extends Record<string, unknown> ? never : keyof T;
export type TMap<K extends TObjectKey, T> = { [P in K]?: T };

export type Nullable<T> = T | null

export type KeyInObject<T = any> = {
  [key in string]: T
}

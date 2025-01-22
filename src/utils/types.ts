/**
 * @description Pick and rename single key in type
 * https://stackoverflow.com/a/59071783
 */
export type PickRename<T, K extends keyof T, R extends PropertyKey> =
    Omit<T, K> & { [P in R]: T[K] }

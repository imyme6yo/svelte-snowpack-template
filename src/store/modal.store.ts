import { Writable } from "svelte/store";
import { writable } from "svelte/store";
import { Readable } from "svelte/store";
import { readable } from "svelte/store";

export const MDATA: Writable<Object> = writable({});
export const MINDEX: Writable<number> = writable(-1);
export const MCOMPONENTS: Writable<Array<Object>> = writable([]);
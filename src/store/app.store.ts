import { Writable } from "svelte/store";
import { writable } from "svelte/store";
import { Readable } from "svelte/store";
import { readable } from "svelte/store";

const _userMenu = [
  ["/", "Home"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export const USER_MENU: Readable<Array<Array<string>>> = readable(_userMenu, (set)=>{
  set(_userMenu);
  return ()=>{};
});

export const MENU:Writable<string> = writable('user');
export const PREV_PATH:Writable<string> = writable('/');
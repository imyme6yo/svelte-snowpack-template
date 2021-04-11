
/**
 * @roxi/routify 2.15.1
 * File generated Sat Apr 10 2021 18:21:20 GMT+0000 (Coordinated Universal Time)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-04-10T18:21:20.320Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports
import _about from '../pages/about.svelte'
import _auth from '../pages/auth.svelte'
import _books__id from '../pages/books/[id].svelte'
import _books_index from '../pages/books/index.svelte'
import _commingSoon from '../pages/comming-soon.svelte'
import _contact from '../pages/contact.svelte'
import _index from '../pages/index.svelte'
import _notfound from '../pages/notfound.svelte'
import _search from '../pages/search.svelte'
import __layout from '../pages/_layout.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/opt/broccoli/web-dev/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/about.svelte",
      "importPath": "../pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => _about
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "auth.svelte",
      "filepath": "/auth.svelte",
      "name": "auth",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/auth.svelte",
      "importPath": "../pages/auth.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/auth",
      "id": "_auth",
      "component": () => _auth
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "books",
      "filepath": "/books",
      "name": "books",
      "ext": "",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/books",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[id].svelte",
          "filepath": "/books/[id].svelte",
          "name": "[id]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/opt/broccoli/web-dev/src/pages/books/[id].svelte",
          "importPath": "../pages/books/[id].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/books/:id",
          "id": "_books__id",
          "component": () => _books__id
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/books/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/opt/broccoli/web-dev/src/pages/books/index.svelte",
          "importPath": "../pages/books/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/books/index",
          "id": "_books_index",
          "component": () => _books_index
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/books"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "comming-soon.svelte",
      "filepath": "/comming-soon.svelte",
      "name": "comming-soon",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/comming-soon.svelte",
      "importPath": "../pages/comming-soon.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/comming-soon",
      "id": "_commingSoon",
      "component": () => _commingSoon
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "contact.svelte",
      "filepath": "/contact.svelte",
      "name": "contact",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/contact.svelte",
      "importPath": "../pages/contact.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/contact",
      "id": "_contact",
      "component": () => _contact
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/index.svelte",
      "importPath": "../pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => _index
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "notfound.svelte",
      "filepath": "/notfound.svelte",
      "name": "notfound",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/notfound.svelte",
      "importPath": "../pages/notfound.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/notfound",
      "id": "_notfound",
      "component": () => _notfound
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "search.svelte",
      "filepath": "/search.svelte",
      "name": "search",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/opt/broccoli/web-dev/src/pages/search.svelte",
      "importPath": "../pages/search.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/search",
      "id": "_search",
      "component": () => _search
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => __layout
}


export const {tree, routes} = buildClientTree(_tree)


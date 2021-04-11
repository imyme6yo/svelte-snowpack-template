/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    "@snowpack/plugin-babel",
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? {tsc: 'yarn pnpify tsc'} : {}),
      },
    ],
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-postcss"
  ],
  alias: {
    '@app': './src'
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
  },
  packageOptions: {
    /* ... */
    knownEntrypoints: ["@roxi/routify/runtime/buildRoutes"]
  },
  devOptions: {
    /* ... */
    port: 3000,
    hmr: true,
    hmrErrorOverlay: true,
    secure: false
  },
  buildOptions: {
    /* ... */
  },
};

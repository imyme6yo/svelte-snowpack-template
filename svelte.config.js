const autoPreprocess = require('svelte-preprocess');

const production = process.env.NODE_ENV === 'production'

module.exports = {
  postcss: {
    plugins: [
      // Check package.json browserslist
      require('autoprefixer')()
    ]
  },
  babel: {
    plugins: production
      ? ['transform-remove-console']
      : []
  },
  preprocess: [
    autoPreprocess({
      defaults: {
        script: 'typescript',
      },
    }),
  ]
};

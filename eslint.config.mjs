// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  react: {
    overrides: {
      'style/jsx-sort-props': 'error',
    },
  },
  unocss: true,
})

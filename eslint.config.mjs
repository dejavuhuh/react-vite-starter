// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  isInEditor: false,
  react: {
    overrides: {
      'style/jsx-sort-props': 'error',
    },
  },
  unocss: true,
})

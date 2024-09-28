import globals from 'globals'
import standard from '@cs/standard'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  standard
]

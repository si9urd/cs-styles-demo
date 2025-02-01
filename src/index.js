import { setDefaultTheme } from './js/prefers-theme.js'
import { setScrollSooth } from './js/scroll-smooth.js'
import { generateColorSchemeHtml } from './js/colors-scheme.js'
import { setCodeHighlight } from './js/code-highlight.js'
// import 'cs-styles/dist/cs-styles.css'
import './scss/index.scss'

function initialize() {
  generateColorSchemeHtml()
  setDefaultTheme()
  setScrollSooth()
  setCodeHighlight()
}

document.addEventListener('DOMContentLoaded', initialize)

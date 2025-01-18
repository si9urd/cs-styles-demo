import pretty from 'pretty'
import hljs from './highlight/highlight.js'
import './highlight/github.scss'
import './highlight/github-dark-dimmed.scss'
import 'cs-styles/dist/cs-styles.css'
import './index.scss'
import { setDefaultTheme } from './js/prefers-theme.js'

function setScrollSooth() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}

function setCodeHighlight() {
  document.querySelectorAll('.code').forEach(function(element) {
    const codeElement = document.createElement('div')
    codeElement.innerHTML = `<pre><code class="language-html">${pretty(element.innerHTML, { ocd: true })}</code></pre>`
    element.after(codeElement)
  })
  document.querySelectorAll('code').forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
  })
  hljs.highlightAll();
}

function initialize() {
  setDefaultTheme()
  setScrollSooth()
  setCodeHighlight()
}

document.addEventListener('DOMContentLoaded', initialize)

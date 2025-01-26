import pretty from 'pretty'
import hljs from './highlight/highlight.js'
import './highlight/github.scss'
import './highlight/github-dark-dimmed.scss'
// import '@oleh-ob/cs-styles/dist/cs-styles.css'
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

function generateColorSchemeHtml() {
  const colorScheme = document.querySelector('.color-scheme')
  const colorsMap = {
    'primary': 'on-primary',
    'secondary': 'on-secondary',
    'tertiary': 'on-tertiary',
    'error': 'on-error',
    'primary-container': 'on-primary-container',
    'secondary-container': 'on-secondary-container',
    'tertiary-container': 'on-tertiary-container',
    'error-container': 'on-error-container',
    'primary-fixed': 'on-primary-fixed',
    'primary-fixed-dim': 'on-primary-fixed',
    'secondary-fixed': 'on-secondary-fixed',
    'secondary-fixed-dim': 'on-secondary-fixed',
    'tertiary-fixed': 'on-tertiary-fixed',
    'tertiary-fixed-dim': 'on-tertiary-fixed-variant',

    'background': 'on-background',
    'surface': 'on-surface',
    'surface-variant': 'on-surface-variant',
    'surface-tint': 'on-surface',
    'surface-dim': 'on-surface',
    'surface-bright': 'on-surface',
    'surface-container-lowest': 'on-surface',
    'surface-container-low': 'on-surface',
    'surface-container': 'on-surface',
    'surface-container-high': 'on-surface',
    'surface-container-highest': 'on-surface',
    'inverse-surface': 'surface',

    'outline': null,
    'outline-variant': null,
    'shadow': null,
    'scrim': null,
    'inverse-primary': null,
  }

  const html = []
  for(const [key, value] of Object.entries(colorsMap)) {
    if(!value) {
     html.push(`
        <div class="g-col-3">
          <div data-color="${key}" style="background-color: var(--cs-${key})" title="--cs-${key}">${key}</div>
        </div>
      `)
    } else {
      html.push(
        `<div class="g-col-3">
        <div data-color="${key}" title="--cs-${key}" style="background-color: var(--cs-${key}); color: var(--cs-${value}, #FFF)">${key}</div>
        <div data-color="${value}" title="--cs-${value}" style="background-color: var(--cs-${value}); color: var(--cs-${key}, #000)">${value}</div>
      </div>
    `)
    }
  }
  colorScheme.innerHTML = html.join('\n')
}

function showCopiedMessage(color) {
  const el = document.createElement('div')
  el.classList.add('copied-message')
  el.innerText = `${color} copied!`
  document.body.appendChild(el)

  const timeout = setTimeout(() => {
    el.remove()
  }, 5000)

  el.addEventListener('click', e => {
    e.stopPropagation()
    clearTimeout(timeout)
    el.remove()
  })
}

function setColorToClipboard() {
  document.querySelectorAll('[data-color]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault()

      const color = `--cs-${this.getAttribute('data-color')}`
      navigator.clipboard.writeText(color)
      showCopiedMessage(color)
    })
  })
}

function initialize() {
  generateColorSchemeHtml()
  setColorToClipboard()
  setDefaultTheme()
  setScrollSooth()
  setCodeHighlight()
}

document.addEventListener('DOMContentLoaded', initialize)

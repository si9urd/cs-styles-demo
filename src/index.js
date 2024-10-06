import format from "html-format"
import pretty from 'pretty'
import hljs from './highlight/highlight.js'
import './highlight/github.scss'
import './highlight/github-dark-dimmed.scss'
import 'cs-styles/css/cs-styles.css'
import './index.scss'
import { setDefaultTheme } from './prefers-theme.js'

document.addEventListener('DOMContentLoaded', function() {
  setDefaultTheme()
  document.querySelectorAll('.code').forEach(function(element) {
    console.log('>>', format(element.innerHTML, ' '.repeat(4), 120))
    const codeElement = document.createElement('div')
    codeElement.innerHTML = `<pre><code class="language-html">${pretty(element.innerHTML, { ocd: true })}</code></pre>`
    // codeElement.innerHTML = `<pre><code class="language-html">${beautify.html(element.innerHTML)}</code></pre>`
    element.after(codeElement)
  })
  document.querySelectorAll('code').forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
  })
  hljs.highlightAll();
})

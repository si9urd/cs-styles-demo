import pretty from 'pretty'
import hljs from './highlight/highlight.js'
import './highlight/github.scss'
import './highlight/github-dark-dimmed.scss'

export function setCodeHighlight() {
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

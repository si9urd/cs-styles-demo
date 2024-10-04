import 'cs-styles/css/cs-styles.min.css'
import './index.scss'

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.code').forEach(function(element) {
    const codeElement = document.createElement('div')
    codeElement.innerHTML = `<pre><code class="language-html">${element.innerHTML}</code></pre>`
    element.after(codeElement)
  })
  document.querySelectorAll('code').forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
  })
  // hljs.highlightAll();
  // toggleTheme()
})
//
// function toggleTheme () {
//   const theme = document.documentElement.getAttribute('data-theme')
//   document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light')
// }

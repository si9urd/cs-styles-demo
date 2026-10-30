export function generateColorSchemeHtml() {
  const colorScheme = document.querySelector('.color-scheme')
  const colorsMap = {
    'primary': 'on-primary',
    'surface': 'on-surface',
    'surface-container': 'on-surface',
    'on-surface-variant': null,
    'outline': null,
    'outline-variant': null,
    'error': null,
    'warning': null,
    'success': null,
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
  setColorToClipboard()
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

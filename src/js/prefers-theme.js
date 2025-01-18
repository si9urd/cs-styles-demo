/**
 * Sets the default theme for the webpage.
 */
export function setDefaultTheme() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
  const theme = darkThemeMq.matches ? 'dark' : 'light'
  const root = document.querySelector(':root')
  root.style.setProperty('--cs-theme', theme)

  document.documentElement.setAttribute('data-theme', theme)
}

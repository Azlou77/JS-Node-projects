
export function Post({ body, title }) {
  const element = document.createElement('div')
  const titleHtmlElement = document.createElement('h1')
  titleHtmlElement.textContent = title
  const paragraphHtmlElement = document.createElement('p')
  paragraphHtmlElement.textContent = body
  element.appendChild(titleHtmlElement)
  element.appendChild(paragraphHtmlElement)
  return element
}
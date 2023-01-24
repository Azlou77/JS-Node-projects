import { test, expect } from "vitest"
import createElement from '../src/utils/createElement'

const tree = {
  tagName: 'div',
  classList: ['columns', 'is-half'],
  text: 'Hello World!',
  attributes: {
    "data-test-id": 'myElement'
  }
}

test('createElement to creeate a div element', () => {
  const element = createElement(tree)
  expect(element.innerHTML).toContain('Hello World')
})
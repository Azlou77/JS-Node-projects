
const createElement = ({ tagName, ...rest }) => {
  const element = document.createElement(tagName);

  if ('classList' in rest) {
    element.classList.add(...rest.classList);
  }

  if ('text' in rest) {
    element.textContent = rest.text;
  }

  if ('attributes' in rest) {
    for (let [key, value] of Object.entries(rest.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if ('children' in rest) {
    for (let e of createBulkElement(rest.children)) element.appendChild(e);
  }

  return element;
};

export const createBulkElement = (elements) => {
  const result = [];
  for (let element of elements) {
    result.push(createElement(element));
  }
  return result;
};


export default createElement
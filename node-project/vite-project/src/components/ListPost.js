import { Post } from "./Post";

export default function ListPost(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)

  arrayOfElement.forEach(e => {
    element.querySelector('div').appendChild(Post(e))
  });

  return element
}
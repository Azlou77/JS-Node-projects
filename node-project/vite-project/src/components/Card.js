import createElement from "../utils/createElement";

const Card = ({ text = 'Bonjour', src, tagName = 'div' } = {}) => createElement(
  {
    tagName,
    children: [
      {
        tagName: 'img',
        attributes: {
          src: src || 'https://via.placeholder.com/150'
        }
      },
      {
        tagName: 'p',
        text,
      },
    ]
  }
)

export default Card
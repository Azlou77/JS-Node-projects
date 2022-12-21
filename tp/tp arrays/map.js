//Voir exerccie https://js-fundamentals.vercel.app/course/data-structure/exercice
const userData = [
    {
      name: 'Considine',
      firstName: 'Christopher',
      age: 18,
    },
    {
      name: 'Fay',
      firstName: 'Leona',
      age: 13,
    },
    {
      name: 'Pollich',
      firstName: 'Harry',
      age: 14,
    },
    {
      name: 'Homenick',
      firstName: 'Angel',
      age: 18,
    },
  ];
  
  export function generateUserSlug(users) {
    return users.map(function (element) {
      element.slug = `${element.name.toLowerCase()} - ${element.firstName.toLowerCase()}`;
      return element;
      // return `${element.name.toLowerCase()} ${element.firstName.toLowerCase()}`;
    });
  }
  
  // console.log(generateUserSlug(userData));
  /**
   * Expected output
    [
      {
        name: 'Considine',
        firstName: 'Christopher',
        age: 18,
        slug: 'considine-christopher'
      },
      { name: 'Fay', firstName: 'Leona', age: 13, slug: 'fay-leona' },
      {
        name: 'Pollich',
        firstName: 'Harry',
        age: 14,
        slug: 'pollich-harry'
      },
      {
        name: 'Homenick',
        firstName: 'Angel',
        age: 18,
        slug: 'homenick-angel'
      }
    ]
   */
  
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
    return null;
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
  
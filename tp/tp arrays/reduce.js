// useful links:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

const userData = [
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 15,
    },
    {
      slug: 'bob-musk',
      name: 'Musk Bob',
      note: 9,
    },
    {
      slug: 'bob-musk',
      name: 'Musk Bob',
      note: 8,
    },
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 14,
    },
    {
      slug: 'bob-musk',
      name: 'Musk Bob',
      note: 6,
    },
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 12,
    },
    {
      slug: 'bob-musk',
      name: 'Musk Bob',
      note: 0,
    },
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 15,
    },
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 18,
    },
    {
      slug: 'alice-zuck',
      name: 'Zuckerberg Alice',
      note: 12,
    },
  ];
  
  export function getMaxByUser(users) {
    return null;
  }
  
  // console.log(getMaxByUser(userData));
  // Expected return:
  /**
   * 
    {
      'alice-zuck': [ 15, 14, 12, 15, 18, 12 ],
      'bob-musk': [ 9, 8, 6, 0 ]
    }
   */
  
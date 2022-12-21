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
  
  /**
   * It should only return > n or == n years old users
   */
  export const filterByAge = (users, n) => {
    users.filter(function(element){
    return element.age >= n 
    })
  };
  
  /**
   * It should only return users whose names contains the string passed
   */
  export const filterByFullName = (users, searchString) => {
    return users.filter(function(element){
    return element.name.includes(searchString);
    })
  };
  
  // console.log(filterByAge(userData, 18));
  /**
   * Expected output:
    [
      { name: 'Considine', firstName: 'Christopher', age: 18 },
      { name: 'Homenick', firstName: 'Angel', age: 18 }
    ]
  */
  
  // console.log(filterByFullName(userData, 'i'));
  /**
   * Expected output:
   [
     { name: 'Considine', firstName: 'Christopher', age: 18 },
     { name: 'Pollich', firstName: 'Harry', age: 14 },
     { name: 'Homenick', firstName: 'Angel', age: 18 }
   ]
  */
  
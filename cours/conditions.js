// Conditions to check major age

/* 
//if  else && condtions
const  agemaj = 18;

//Enter your age
const  age =  prompt ( "Enter your age" );

//Check if age is major
if  (age >= agemaj) {
    alert ( "You are major" );
}
else
{
    alert ( "You are minor" );
}
*/
//Ternary Conditions
function getAge(isMajor) {
    return (isMajor ? '2.00' : '10.00');
  }
  
  console.log(getAge(true));
  // Expected output: "2.00"
  
  console.log(getAge(false));
  // Expected output: "10.00"
  
  console.log(getAge(null));
  // Expected output: "10.00"
  
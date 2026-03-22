
 //First name: Carlos
 const firstName = "Carlos";
 //Last name: Stevenson
 const lastName = "Stevenson";
 const fullName = firstName + " " + lastName;
 //This year: 1965
 const thisYear = 1965;
 //Birth year: 1947
 const birthYear = 1947;
 const age = thisYear - birthYear;
 //The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
 const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old."; 


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}

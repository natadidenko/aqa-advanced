let person = {
    firstName: "Віта",
    lastName: "Манилюк",
    age: 21
};
  
person.email = "vita.m@example.com";

delete person.age;
  
console.log(person);
let users = [
    { name: "Віта", email: "vita@example.com", age: 25 },
    { name: "Олена", email: "olena@example.com", age: 30 },
    { name: "Максим", email: "maksym@example.com", age: 28 }
];
  
for (let user of users) {
    let { name, email, age } = user;
  
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
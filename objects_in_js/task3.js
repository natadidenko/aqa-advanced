let car1 = {
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2021
};
  
let car2 = {
    brand: "Suzuki",
    model: "Jimny",
    owner: "Nata"
};
  
let car3 = {
    ...car1,
    ...car2
};
  
console.log(car3);
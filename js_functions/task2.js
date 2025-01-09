// Спосіб 1: Function Declaration
function isAdultDeclaration(age) {
    return age >= 18;
}
console.log("Дорослий (Function Declaration, 25):", isAdultDeclaration(25));
console.log("Дорослий (Function Declaration, 15):", isAdultDeclaration(15));

// Спосіб 2: Function Expression
const isAdultExpression = function(age) {
    return age >= 18;
};
console.log("Дорослий (Function Expression, 25):", isAdultExpression(25));
console.log("Дорослий (Function Expression, 15):", isAdultExpression(15));

// Спосіб 3: Arrow Function
const isAdultArrow = (age) => age >= 18;
console.log("Дорослий (Arrow Function, 25):", isAdultArrow(25));
console.log("Дорослий (Arrow Function, 15):", isAdultArrow(15));

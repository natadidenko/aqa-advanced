// Спосіб 1: Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
}
console.log("Площа (Function Declaration):", calculateAreaDeclaration(5, 10));

// Спосіб 2: Function Expression
const calculateAreaExpression = function(width, height) {
    return width * height;
};
console.log("Площа (Function Expression):", calculateAreaExpression(5, 10));

// Спосіб 3: Arrow Function
const calculateAreaArrow = (width, height) => width * height;
console.log("Площа (Arrow Function):", calculateAreaArrow(5, 10));
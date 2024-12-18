// Спосіб 1: Function Declaration
function checkOrderDeclaration(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}
console.log("Результат (Function Declaration, 100, 50):", checkOrderDeclaration(100, 50));
console.log("Результат (Function Declaration, 100, 0):", checkOrderDeclaration(100, 0));
console.log("Результат (Function Declaration, 100, 150):", checkOrderDeclaration(100, 150));

// Спосіб 2: Function Expression
const checkOrderExpression = function(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
};
console.log("Результат (Function Expression, 100, 50):", checkOrderExpression(100, 50));
console.log("Результат (Function Expression, 100, 0):", checkOrderExpression(100, 0));
console.log("Результат (Function Expression, 100, 150):", checkOrderExpression(100, 150));

// Спосіб 3: Arrow Function
const checkOrderArrow = (available, ordered) => {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
};
console.log("Результат (Arrow Function, 100, 50):", checkOrderArrow(100, 50));
console.log("Результат (Arrow Function, 100, 0):", checkOrderArrow(100, 0));
console.log("Результат (Arrow Function, 100, 150):", checkOrderArrow(100, 150));

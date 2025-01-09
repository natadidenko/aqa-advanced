// Функція, яка приймає число і два колбеки
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(); // Викликаємо функцію для парного числа
    } else {
        oddCallback(); // Викликаємо функцію для непарного числа
    }
}

// Функція-колбек для парного числа
function handleEven() {
    console.log("number is even");
}

// Функція-колбек для непарного числа
function handleOdd() {
    console.log("number is odd");
}

// Виклик функції handleNum з параметрами
handleNum(10, handleEven, handleOdd); // Виведе: "number is even"
handleNum(15, handleEven, handleOdd); // Виведе: "number is odd"
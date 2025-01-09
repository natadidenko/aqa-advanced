// Початковий масив
const numbers = [10, 20, 30, 40, 50];

// Використовуємо метод reduce для обчислення суми
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Виводимо результат
console.log(sum);
// Початковий масив
const numbers = [1, 2, 3, 4, 5];

// Створюємо новий масив, де кожне значення - це елемент, помножений на його індекс
const mutatedArray = numbers.map((num, index) => num * index);

// Виводимо новий масив
console.log(mutatedArray);
// Початковий масив
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Використовуємо filter для відбору парних чисел
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Виводимо новий масив
console.log(evenNumbers);
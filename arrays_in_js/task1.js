// Заданий масив чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// Змінні для підрахунку
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Проходимо по кожному числу в масиві
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++; 
  } else if (numbers[i] < 0) {
    negativeCount++; 
  } else {
    zeroCount++; 
  }
}

// Виведення результатів
console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
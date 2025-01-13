// Вихідний масив
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Копіюємо масив 
const sortedNumbersList = [...numbersList]; 

// Сортуємо новий масив від меншого до більшого
sortedNumbersList.sort((a, b) => a - b);

// Виводимо обидва масиви на консоль
console.log("Вихідний масив:", numbersList);
console.log("Відсортований масив:", sortedNumbersList);
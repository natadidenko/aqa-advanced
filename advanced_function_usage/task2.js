// Функція, яка приймає число і два колбеки
function countdown(num) {
    console.log(num); // Виводимо поточне значення num

    if (num <= 0) {
        return; // Завершуємо рекурсію, якщо num <= 0
    }

    countdown(num - 1); // Рекурсивно викликаємо функцію зі зменшеним значенням
}

// Виклик функції з початковим значенням 5
countdown(5);
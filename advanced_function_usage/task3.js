// Функція divide з валідацією
function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return numerator / denominator;
}

// Виклики функції divide з різними аргументами
const testCases = [
    { numerator: 10, denominator: 2 }, // Коректний випадок
    { numerator: 15, denominator: 0 }, // Помилка: ділення на нуль
    { numerator: "a", denominator: 5 }, // Помилка: numerator не число
    { numerator: 20, denominator: "b" } // Помилка: denominator не число
];

testCases.forEach(({ numerator, denominator }) => {
    try {
        const result = divide(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
});
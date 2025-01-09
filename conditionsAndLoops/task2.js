// Завдання 2: Визначення рівня успішності студента за допомогою switch/case

const averageGrade = 85; // Приклад середньої оцінки студента
let result;

switch (true) {
    case averageGrade < 60:
        result = "Незадовільно";
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        result = "Задовільно";
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        result = "Добре";
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        result = "Дуже добре";
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        result = "Відмінно";
        break;
    default:
        result = "Невірне значення оцінки";
}

console.log(result);
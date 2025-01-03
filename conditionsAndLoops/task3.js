// Завдання 3: Генерація таблиці множення

const number = 5; // Обране число для таблиці множення

console.log("Таблиця множення для числа " + number + " (цикл for):");
// Генерація таблиці множення з використанням циклу for
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("\nТаблиця множення для числа " + number + " (цикл while):");
// Генерація таблиці множення з використанням циклу while
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
import Book from './Book.js';
import EBook from './EBook.js';

// Створення екземплярів класу Book
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);
book1.printInfo();
book2.printInfo();

// Створення екземпляру класу EBook
const ebook = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');
ebook.printInfo();

// Геттери та сеттери
book1.title = 'The Great Gatsby: Revised Edition';
console.log(book1.title);

// Використання статичного методу для пошуку найдавнішої книги
const books = [book1, book2, ebook];
const oldestBook = Book.findOldestBook(books);
console.log('Oldest Book:', oldestBook.title);

// Конвертація Book в EBook
const convertedEBook = EBook.convertToEBook(book1, 'EPUB');
convertedEBook.printInfo();
import Book from './Book.js';

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Format must be a non-empty string.');
    }
    this._format = value;
  }

  printInfo() {
    console.log(
      `"${this.title}" by ${this.author}, published in ${this.year}, format: ${this.format}.`
    );
  }

  static convertToEBook(book, format) {
    if (!(book instanceof Book)) {
      throw new Error('Input must be an instance of Book.');
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}

export default EBook;
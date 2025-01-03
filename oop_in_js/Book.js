class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    get title() {
      return this._title;
    }
  
    set title(value) {
      if (!value || typeof value !== 'string') {
        throw new Error('Title must be a non-empty string.');
      }
      this._title = value;
    }
  
    get author() {
      return this._author;
    }
  
    set author(value) {
      if (!value || typeof value !== 'string') {
        throw new Error('Author must be a non-empty string.');
      }
      this._author = value;
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      if (!value || typeof value !== 'number' || value <= 0) {
        throw new Error('Year must be a positive number.');
      }
      this._year = value;
    }
  
    printInfo() {
      console.log(`"${this.title}" by ${this.author}, published in ${this.year}.`);
    }
  
    static findOldestBook(books) {
      return books.reduce((oldest, current) =>
        current.year < oldest.year ? current : oldest
      );
    }
  }
  
  export default Book;
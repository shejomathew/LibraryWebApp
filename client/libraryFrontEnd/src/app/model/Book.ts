export class Book {
  id: number;
  bookName: string;
  author: string;
  takenBy: string;
  takenDate: Date;
  returnDate: Date;
  description: string;
  available: boolean;

  constructor(
    id = 0,
    bookName = '',
    author = '',
    takenBy = '',
    takenDate = new Date(),
    returnDate = new Date(),
    description = '',
    available = false
  ) {
    this.id = id;
    this.bookName = bookName;
    this.author = author;
    this.takenBy = takenBy;
    this.takenDate = takenDate;
    this.returnDate = returnDate;
    this.description = description;
    this.available = available;
  }
}

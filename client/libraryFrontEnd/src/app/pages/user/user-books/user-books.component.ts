import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css'],
})
export class UserBooksComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}

  public books = [
    {
      id: 0,
      bookName: '',
      author: '',
      takenBy: '',
      takenDate: new Date(),
      returnDate: new Date(),
      description: '',
      available: false,
    },
  ];
  book: any;

  ngOnInit(): void {
    this.viewbook();
  }

  viewbook() {
    console.log('getting books');
    this.bookService.getActiveBook().subscribe(
      (data: any) => {
        //success
        this.books = data;
        console.log(this.books);
        //alert('success');
        //Swal.fire('Successfully done');
      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');

        //alert('Something went wrong')
      }
    );
  }

  issueBook(id: any) {
    this.bookService.issueBookById(id).subscribe(
      (data: any) => {
        this.book = data;
        console.log(this.book);
        Swal.fire('Success !!', `${this.book.bookName} issued!!`, 'success');
        // this.router.navigate(['/user/book-issue/'], {
        //   state: { bookName: this.book.bookName },
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in issueing book', 'error');
      }
    );
  }
}

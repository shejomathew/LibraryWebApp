import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  public book = {
    id: 0,
    bookName: '',
    author: '',
    takenBy: '',
    takenDate: '',
    returnDate: '',
    description: '',
    available: false,
  };

  constructor(private bookService: BookService, private _snack: MatSnackBar) {}

  ngOnInit(): void {}

  addbook() {
    console.log(this.book);

    if (this.book.bookName.trim() == '' || this.book.bookName == null) {
      this._snack.open('Name required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.book.author.trim() == '' || this.book.author == null) {
      this._snack.open('Author required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    if (this.book.description.trim() == '' || this.book.description == null) {
      this._snack.open('Description required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    this.bookService.addBook(this.book).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.book = {
          id: 0,
          bookName: '',
          author: '',
          takenBy: '',
          takenDate: '',
          returnDate: '',
          description: '',
          available: false,
        };

        Swal.fire('Successfully done', 'book is added ', 'success');
      },
      (error) => {
        //error
        console.log(error);
        Swal.fire('Error occur', 'Server error !!', 'error');

        //alert('Something went wrong')
      }
    );
  }
}

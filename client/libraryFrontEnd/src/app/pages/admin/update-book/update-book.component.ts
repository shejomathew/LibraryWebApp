import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  id = 0;
  book: any;

  ngOnInit(): void {
    console.log(history.state);
    // this.id = this._route.snapshot.params.id;
    this.id = history.state.data;
    this.bookService.getBookById(this.id).subscribe(
      (data) => {
        this.book = data;
        console.log(this.book);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public updateData() {
    this.bookService.updateBook(this.book).subscribe(
      (data: any) => {
        Swal.fire('Success !!', 'Book updated !!', 'success').then((s) => {
          this._router.navigate(['/admin/view-book']);
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Error occur', 'Server error !!', 'error');
      }
    );
  }
}

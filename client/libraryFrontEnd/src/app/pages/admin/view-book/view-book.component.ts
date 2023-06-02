import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}

  // books = {
  //   id,
  //   name: string,
  // };

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

  // books = [Book];

  ngOnInit(): void {
    this.viewbook();
  }

  removebook(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.removeBook(id).subscribe(
          (data) => {
            // this.router.navigate(['admin', 'medicines']);
            // this.books = this.books.filter((book: any) => book.id != id);
            this.viewbook();
            Swal.fire('Successfully done', 'Book Removed', 'success');
            console.log(this.books);
          },
          (error) => {
            console.log(error);
            Swal.fire('Error !!', 'Error in removing book', 'error');
          }
        );
      }
    });
  }

  viewbook() {
    console.log('getting books');
    this.bookService.viewBook().subscribe(
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

  updatebook(id: any) {
    this.router.navigate(['/admin/update-book/'], { state: { data: id } });
  }
}

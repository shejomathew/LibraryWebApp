import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css'],
})
export class UserWelcomeComponent implements OnInit {
  books: any;
  constructor(
    private _route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookService.getActiveBook().subscribe(
      (data: any) => {
        this.books = data;
        console.log(this.books);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

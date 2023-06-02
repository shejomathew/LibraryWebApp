import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/model/Book';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  public addBook(book: any) {
    return this.httpClient.post(`${baseUrl}/book/insert`, book);
  }

  public updateBook(book: any) {
    return this.httpClient.put(`${baseUrl}/book/update`, book);
  }

  public removeBook(id: any) {
    return this.httpClient.delete<Book>(`${baseUrl}/book/delete/` + id);
  }

  public viewBook() {
    return this.httpClient.get(`${baseUrl}/book/`);
  }

  public getActiveBook() {
    return this.httpClient.get(`${baseUrl}/book/active`);
  }

  public getBookById(id: any) {
    return this.httpClient.get(`${baseUrl}/book/get/` + id);
  }

  public issueBookById(id: any) {
    return this.httpClient.put(`${baseUrl}/book/issue/` + id, []);
  }
}

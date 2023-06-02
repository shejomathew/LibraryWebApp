package com.jnit.library.controller;

import com.jnit.library.entity.Book;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.service.BookService;
import com.jnit.library.service.Impl.BookServiceImpl;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.jnit.library.model.BookModel;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
    @Autowired
    BookService bookService;
    Logger logger = LoggerFactory.getLogger(BookServiceImpl.class);

    @PostMapping("/insert")
    public ResponseEntity<Book> insert(@Valid @RequestBody BookModel bookModel) throws LibraryException {
        Book newBook = bookService.insert(bookModel);
        return ResponseEntity.ok().body(newBook);
    }
    @GetMapping("/")
    public ResponseEntity<?> getAllBooks(){
        return ResponseEntity.ok(this.bookService.getBooks());
    }
    @PutMapping("/update")
    public ResponseEntity<Book> update(@RequestBody BookModel bookModel) throws LibraryException {

        return ResponseEntity.ok(this.bookService.update(bookModel));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Book> delete(@PathVariable("id") Long id) throws LibraryException {
        Book book = bookService.delete(id);
        logger.info("in controller  "+book);
        return ResponseEntity.ok().body(book);
    }
    @GetMapping("/active")
    public ResponseEntity<?> getAvailableBooks(){
        return ResponseEntity.ok(this.bookService.getAvailableBooks());
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) throws LibraryException {
        return ResponseEntity.ok(bookService.getBookById(id));
    }

    @PutMapping("/issue/{id}")
    public ResponseEntity<?> issueBookById(@PathVariable("id") Long id) throws LibraryException {
        return ResponseEntity.ok(bookService.issueBookById(id));
    }
}

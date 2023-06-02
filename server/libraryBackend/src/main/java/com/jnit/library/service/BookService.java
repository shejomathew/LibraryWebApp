package com.jnit.library.service;

import com.jnit.library.entity.Book;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.model.BookModel;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface BookService {

    public Book insert(BookModel bookModel) throws LibraryException;

    public Book delete(Long id) throws LibraryException;

    public Set<Book> getBooks();

    public Book update(BookModel bookModel) throws LibraryException;

    public Set<Book> getAvailableBooks();

    public Book getBookById(Long id) throws LibraryException;

    public Book issueBookById(Long id) throws LibraryException;


}

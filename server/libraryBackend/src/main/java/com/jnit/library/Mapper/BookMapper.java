package com.jnit.library.Mapper;

import com.jnit.library.entity.Book;
import com.jnit.library.model.BookModel;
import org.springframework.stereotype.Component;

@Component
public class BookMapper {


    public Book bookModelToEntity(BookModel bookModel){


        Book book = new Book();

        book.setBookName(bookModel.getBookName());
        book.setAuthor(bookModel.getAuthor());
        book.setTakenBy(bookModel.getTakenBy());
        book.setAvailable(bookModel.getAvailable());
        book.setReturnDate(bookModel.getReturnDate());
        book.setTakenDate(bookModel.getTakenDate());
        book.setDescription(bookModel.getDescription());

        return book;

    }
}

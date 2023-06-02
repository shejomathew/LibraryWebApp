package com.jnit.library.service.Impl;

import com.jnit.library.Mapper.BookMapper;
import com.jnit.library.config.JwtAuthenticationFilter;
import com.jnit.library.entity.Book;
import com.jnit.library.exception.ErrorConstant;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.model.BookModel;
import com.jnit.library.repository.BookRepository;
import com.jnit.library.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;


@Component
public class BookServiceImpl implements BookService {
    Logger logger = LoggerFactory.getLogger(BookServiceImpl.class);

    @Autowired
    BookRepository bookRepository;

    @Autowired
    BookMapper bookMapper;

    @Override
    public Book insert(BookModel bookModel) throws LibraryException {

        Book book = bookMapper.bookModelToEntity(bookModel);
        logger.info("Book desc "+book);

        Optional<Book> local =  Optional.ofNullable(this.bookRepository.findByBookName(book.getBookName()));

        Book newBook;
        if(local.isPresent())
            throw new LibraryException(ErrorConstant.BOOK_PRESENT);
        else
            newBook = bookRepository.save(book);
        return newBook;
    }

    @Override
    public Book delete(Long id) throws LibraryException {

        Book book =  Optional.ofNullable(this.bookRepository.getById(id)).orElseThrow(
                () ->  new LibraryException(ErrorConstant.BOOK_NOT_PRESENT)
        );

        logger.info("in delete "+book);
        this.bookRepository.deleteById(id);
        return book;
    }

    @Override
    public Set<Book> getBooks() {
        return new LinkedHashSet<>(this.bookRepository.findAll());
    }

    @Override
    public Book update(BookModel bookModel) throws LibraryException {

        Book book = bookMapper.bookModelToEntity(bookModel);
        book.setId(bookModel.getId());
        Optional.ofNullable(this.bookRepository.findById(book.getId())).orElseThrow(
                () ->  new LibraryException(ErrorConstant.BOOK_NOT_PRESENT)
        );
        Book updatedBook = this.bookRepository.save(book);

        return updatedBook;
    }

    @Override
    public Set<Book> getAvailableBooks() {

        return new LinkedHashSet<>(this.bookRepository.findByAvailable(true));
    }

    @Override
    public Book getBookById(@Param("id")  Long id) throws LibraryException {

        Book book =  this.bookRepository.findById(id).orElseThrow(
                () ->  new LibraryException(ErrorConstant.BOOK_NOT_PRESENT)
        );
        return book;

    }


    @Override
    public Book issueBookById(@Param("id")  Long id) throws LibraryException {

        Book book =  this.bookRepository.findById(id).orElseThrow(
                () ->  new LibraryException(ErrorConstant.BOOK_NOT_PRESENT)
        );

//        book.setAvailable(false);
//        bookRepository.save(book);

        logger.info(String.valueOf(book));
        bookRepository.setUnavailable(id);

        return book;

    }



}


package com.jnit.library.repository;

import com.jnit.library.entity.Book;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    public Book findByBookName(String bookName);

    public List<Book> findByAvailable(Boolean bool);

    @Transactional
    @Modifying
    @Query( value = "update Book set available = false where id = :id", nativeQuery = true)
    void setUnavailable(@Param("id") Long id);
}

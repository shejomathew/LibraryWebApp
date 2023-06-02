package com.jnit.library.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookModel {

    private Long id;
    @NotNull
    @Size(min = 1)
    private String bookName;
    @NotNull
    @Size(min = 1)
    private String author;
    private String takenBy;
    private Date takenDate;
    private Date returnDate;

    @NotNull
    private String description;
    @NotNull
    private Boolean available;
}

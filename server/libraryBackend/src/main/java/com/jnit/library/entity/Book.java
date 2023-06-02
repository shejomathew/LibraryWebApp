package com.jnit.library.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String bookName;

    private String author;
    private String takenBy;

    private Date takenDate;

    private Date returnDate;

    @Column(name = "description", columnDefinition = "text")
    private String description;


    private Boolean available;

}

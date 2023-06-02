package com.jnit.library.model;


import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import jakarta.validation.constraints.NotNull;


@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddressModel {

    private Long id;
    @NotNull
    @Size(min = 1)
    private String street;
    @NotNull
    @Size(min = 1)
    private String city;
    @NotNull
    @Size(min = 1)
    private String state;
    @NotNull
    @Size(min = 1)
    private String country;

    @NotNull
    @Size(min = 1)
    private String zipcode;
}

package com.jnit.library.model;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public class LoginModel {

    @NotNull
    @Size(min = 1)
    private String userName;
    @NotNull
    @Size(min = 1)
    private String password;

}

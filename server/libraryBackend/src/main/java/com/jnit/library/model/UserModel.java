package com.jnit.library.model;

import com.jnit.library.entity.Address;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserModel {

    private Long id;
    @NotNull
    @Size(min = 1)
    private String username;
    @NotNull
    @Size(min = 1)
    private String password;
    @NotNull
    @Size(min = 1)
    private String firstName;
    @NotNull
    @Size(min = 1)
    private String lastName;
    @NotNull
    private AddressModel address;
    @NotNull
    @Size(min = 1)
    private String email;
    @NotNull
    @Size(min = 1)
    private String phone;
    @NotNull
    private RoleModel role;
}

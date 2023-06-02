package com.jnit.library.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RoleModel {

    private Long id;
    @NotNull
    @Size(min = 1)
    private String roleName;
}

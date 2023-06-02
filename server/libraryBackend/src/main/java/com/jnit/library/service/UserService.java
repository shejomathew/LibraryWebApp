package com.jnit.library.service;

import com.jnit.library.entity.User;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.model.UserModel;
import com.jnit.library.model.LoginModel;
import com.jnit.library.model.UserModel;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {

    public User register(UserModel userModel) throws LibraryException;

    public User login(LoginModel loginModel) throws LibraryException;

    public Optional<User> findByUsername(String username);

}

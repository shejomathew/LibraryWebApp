package com.jnit.library.controller;

import com.jnit.library.config.AuthenticationService;
import com.jnit.library.entity.User;
import com.jnit.library.exception.LibraryException;
//import com.jnit.library.model.UserModel;
import com.jnit.library.model.AuthenticationResponse;
import com.jnit.library.model.LoginModel;
import com.jnit.library.model.UserModel;
import com.jnit.library.service.UserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationService authenticationService;




    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody UserModel userModel) throws LibraryException {

        User userDetails = userService.register(userModel);;
        return ResponseEntity.ok().body(userDetails);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody LoginModel loginModel) throws LibraryException {
        return ResponseEntity.ok(authenticationService.authenticate(loginModel));
    }


    @GetMapping("/current-user")
    public Optional<User> getCurrentUser(Principal principal){
        return this.userService.findByUsername(principal.getName());
    }



    @PostMapping("/login")
    public ResponseEntity<User> login(@Valid @RequestBody LoginModel loginModel) throws LibraryException{

        User userDetails = userService.login(loginModel);
        return ResponseEntity.ok().body(userDetails);

    }



}

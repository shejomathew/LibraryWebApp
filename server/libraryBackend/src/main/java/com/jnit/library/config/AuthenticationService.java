package com.jnit.library.config;

import com.jnit.library.entity.User;
import com.jnit.library.exception.ErrorConstant;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.model.AuthenticationResponse;
import com.jnit.library.model.LoginModel;
import com.jnit.library.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    Logger logger = LoggerFactory.getLogger(AuthenticationService.class);


    @Autowired
    UserRepository userRepository;

    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    public AuthenticationResponse authenticate(LoginModel loginModel) throws LibraryException {

        logger.info("AuthService");

        User user = userRepository.findByUsername(loginModel.getUserName()).orElseThrow(
                () -> new LibraryException(ErrorConstant.USER_NOT_PRESENT)
        );


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginModel.getUserName(),
                        loginModel.getPassword()
                )
        );
//        logger

        if(authentication.isAuthenticated()){
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }else
            throw new LibraryException(ErrorConstant.INVALID_CREDENTIALS);


    }
}

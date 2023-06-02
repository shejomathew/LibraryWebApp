package com.jnit.library.service.Impl;

import com.jnit.library.Mapper.UserMapper;
import com.jnit.library.exception.ErrorConstant;
import com.jnit.library.exception.LibraryException;
import com.jnit.library.entity.User;
import com.jnit.library.model.LoginModel;
import com.jnit.library.model.UserModel;
import com.jnit.library.repository.UserRepository;
import com.jnit.library.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserMapper userMapper;

//    @Autowired
//    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public User register(UserModel userModel) throws LibraryException {

        User user = userMapper.userModelToEntity(userModel);

        Optional<User> local  = this.userRepository.findByUsername(user.getUsername());
        User current;
        if(local.isPresent())
            throw new LibraryException(ErrorConstant.USER_PRESENT);
        else
            current = this.userRepository.save(user);


        return current;
    }

    @Override
    public User login(LoginModel loginModel) throws LibraryException {

        User user = this.userRepository.findByUsername(loginModel.getUserName()).orElseThrow(
                () -> new LibraryException((ErrorConstant.EMPTY_USERNAME))
        );

//        this.bCryptPasswordEncoder.d




        return null;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return  userRepository.findByUsername(username);
    }
}

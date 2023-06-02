package com.jnit.library.Mapper;

import com.jnit.library.entity.Address;
import com.jnit.library.entity.Role;
import com.jnit.library.entity.User;
import com.jnit.library.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    @Autowired
    AddressMapper addressMapper;

    @Autowired
    RoleMapper roleMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User userModelToEntity(UserModel userModel){

        User user = new User();
        user.setUsername(userModel.getUsername());
        user.setPassword(this.bCryptPasswordEncoder.encode(userModel.getPassword()));
        user.setFirstName(userModel.getFirstName());
        user.setLastName(userModel.getLastName());
        user.setAddress(addressMapper.addressModelToEntity(userModel.getAddress()));
        user.setEmail(userModel.getEmail());;
        user.setPhone(userModel.getPhone());
        user.setRole(roleMapper.roleModelToEntity(userModel.getRole()));

        return user;

    }





}

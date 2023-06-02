package com.jnit.library.Mapper;

import com.jnit.library.entity.Role;
import com.jnit.library.model.RoleModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {




    public Role roleModelToEntity(RoleModel roleModel){

        Role role = new Role();

        role.setId(roleModel.getId());
        role.setRoleName(roleModel.getRoleName());

        return role;
    }
}

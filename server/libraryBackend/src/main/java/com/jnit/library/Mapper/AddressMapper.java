package com.jnit.library.Mapper;

import com.jnit.library.entity.Address;
import com.jnit.library.model.AddressModel;
import org.springframework.stereotype.Component;

@Component
public class AddressMapper {


    public Address addressModelToEntity(AddressModel addressModel){

        Address address = new Address();

        address.setStreet(addressModel.getStreet());
        address.setCity(addressModel.getCity());
        address.setState(addressModel.getState());
        address.setCountry(addressModel.getCountry());
        address.setZipcode(addressModel.getZipcode());

        return address;
    }
}

package com.jnit.library.repository;

import com.jnit.library.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Long>{

    @Query("from User u where u.username = :username")
    public Optional<User> findByUsername(@Param("username") String username);
}

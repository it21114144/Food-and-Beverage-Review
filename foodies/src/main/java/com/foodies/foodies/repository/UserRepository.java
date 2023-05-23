package com.foodies.foodies.repository;

import com.foodies.foodies.model.User;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);

    Optional<User> getUserByUsername(String username);


}
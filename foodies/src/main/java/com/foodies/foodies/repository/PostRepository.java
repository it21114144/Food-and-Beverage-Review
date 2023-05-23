package com.foodies.foodies.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.foodies.foodies.model.Post;

@EnableMongoRepositories("com.foodies.foodies.repository.mongo")

@Repository
public interface PostRepository extends MongoRepository <Post, String> {

    Optional<Post> findByUserId(String id, String userId);
  
}
    
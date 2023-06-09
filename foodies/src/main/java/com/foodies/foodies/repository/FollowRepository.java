package com.foodies.foodies.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.foodies.foodies.model.Follow;

public interface FollowRepository extends MongoRepository<Follow, String> {
    @Query("{ 'followedBy': ?0 }")
    List<Follow> findByFollowedBy(String followedBy);

    @Query("{ 'followedTo': ?0 }")
    List<Follow> findByFollowedTo(String followedTo);
}

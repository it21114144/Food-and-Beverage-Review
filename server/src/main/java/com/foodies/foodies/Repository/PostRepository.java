package com.foodies.foodies.Repository;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.foodies.foodies.Entity.Post;

@Repository
public interface PostRepository extends MongoRepository <Post, String> {

	Post save(Post post);
    ArrayList<Post> findAll(); 
}

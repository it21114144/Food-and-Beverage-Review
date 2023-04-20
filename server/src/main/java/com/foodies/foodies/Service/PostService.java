package com.foodies.foodies.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodies.foodies.Entity.Post;
import com.foodies.foodies.Repository.PostRepository;

@Service 
public class PostService{

    @Autowired
    PostRepository postRepository;

    public Post createPost(Post post){
        return postRepository.save(post);
    }

    public ArrayList<Post> retrievePost(){
       return postRepository.findAll();
    }

}
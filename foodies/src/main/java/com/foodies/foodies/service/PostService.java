package com.foodies.foodies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodies.foodies.repository.PostRepository;
import com.foodies.foodies.model.Post;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(String id) {
        return postRepository.findById(id);
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(String id, Post post) {
        Optional<Post> existingPost = postRepository.findById(id);
        if (existingPost.isPresent()) {
            Post updatedPost = existingPost.get();
            updatedPost.setUsername(post.getUsername());
            updatedPost.setImages(post.getImages());
            updatedPost.setCaption(post.getCaption());
            return postRepository.save(updatedPost);
        }
        return null;
    }

    public boolean deletePost(String id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    public Post likePost(String id, String userId) {
        Optional<Post> existingPost = postRepository.findById(id);
        if (existingPost.isPresent()) {
            Post post = existingPost.get();
            List<String> likes = post.getLikes();
            if (!likes.contains(userId)) {
                likes.add(userId);
                post.setLikes(likes);
                return postRepository.save(post);
            }
        }
        return null;
}

    public Optional<Post> getPostByUserId(String id, String userId) {
        return postRepository.findByUserId(id, userId);
    }

    public Optional<Post> getPostByUsername(String username) {
        return null;
    }

    /* 
    public Post addComment(String id, Comment comment) {
        Optional<Post> existingPost = postRepository.findById(id);
        if (existingPost.isPresent()) {
            Post post = existingPost.get();
            List<Comment> comments = post.getComments();
            comments.add(comment);
            post.setComments(comments);
            return postRepository.save(post);
        }
        return null;
    }
    */
}
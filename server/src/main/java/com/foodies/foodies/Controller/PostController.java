package com.foodies.foodies.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodies.foodies.Entity.Post;
import com.foodies.foodies.Service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
   @Autowired
   PostService postService;

   @PostMapping("")
   private Post submitPost(@RequestBody Post post){
      return postService.createPost(post);
   }

   @GetMapping("/post")
   private ArrayList<Post> getAllPost(){
      return postService.retrievePost();
   }
}

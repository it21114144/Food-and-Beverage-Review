package com.foodies.foodies.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collection = "posts")
public class Post {
    @Id
    private String id;

    private String userId;

    private String username; 

    private String caption;

    private List<String> imageUrls;

    private List<String> likes;
    
    //private List<Comment> comments;
    

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public List<String> getImages() {
        return imageUrls;
    }

    public void setImages(List<String> images) {
        this.imageUrls = images;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
    
    public List<String> getLikes() {
        return likes;
    }
    public void setLikes(List<String> likes) {
        this.likes = likes;
}

    /* 
    public List<Comment> getComments() {
        return comments;
    }
    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
    */

}
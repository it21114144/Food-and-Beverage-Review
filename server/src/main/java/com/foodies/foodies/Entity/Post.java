package com.foodies.foodies.Entity;

import java.security.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collation = "posts")
public class Post {

	@Id
	private int Id;

	private String postId;
	private String userName;
	private String imageURL;
	private String description;
	private Timestamp timestamp;
	private int likes;
	
	
	public Post() {

	}


	public Post(int id, String postId, String userName, String imageURL, String description, Timestamp timestamp,
			int likes) {
		super();
		this.Id = id;
		this.postId = postId;
		this.userName = userName;
		this.imageURL = imageURL;
		this.description = description;
		this.timestamp = timestamp;
		this.likes = likes;
	}


	public int getId() {
		return Id;
	}


	public void setId(int id) {
		this.Id = id;
	}

	public String getPostId() {
		return postId;
	}


	public void getPostId(String postId) {
		this.postId = postId;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getImageURL() {
		return imageURL;
	}


	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Timestamp getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}


	public int getLikes() {
		return likes;
	}


	public void setLikes(int likes) {
		this.likes = likes;
	}

	
}
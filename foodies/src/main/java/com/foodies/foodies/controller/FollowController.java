package com.foodies.foodies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.foodies.foodies.model.Follow;
import com.foodies.foodies.service.FollowService;

import java.util.List;

@RestController
@RequestMapping("api/follow")
public class FollowController {

    @Autowired
    private FollowService followService;

    @GetMapping
    public List<Follow> getAllFollowers() {
        return followService.findAll();
    }

    @PostMapping
    public ResponseEntity<Follow> createFollow(@RequestBody Follow follow) {
        followService.save(follow);
        return new ResponseEntity<>(follow, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Follow> getFollowById(@PathVariable("id") String id) {
        return followService.findById(id)
                .map(follow -> new ResponseEntity<>(follow, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFollow(@PathVariable("id") String id) {
        if (followService.existsById(id)) {
            followService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Follow> updateFollow(@PathVariable("id") String id, @RequestBody Follow updatedFollow) {
        return followService.findById(id)
                .map(follow -> {
                    follow.setFollowedBy(updatedFollow.getFollowedBy());
                    follow.setFollowedTo(updatedFollow.getFollowedTo());
                    followService.save(follow);
                    return new ResponseEntity<>(follow, HttpStatus.OK);
                })
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    /* 
    @GetMapping("/byFollowedBy/{followedBy}")
    public List<Follow> findByFollowedBy(@PathVariable("followedBy") String followedBy) {
        return followService.findByFollowedBy(followedBy);
    }

    @GetMapping("/byFollowedTo/{followedTo}")
    public List<Follow> findByFollowedTo(@PathVariable("followedTo") String followedTo) {
        return followService.findByFollowedTo(followedTo);
    } */
}

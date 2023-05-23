package com.foodies.foodies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodies.foodies.model.Follow;
import com.foodies.foodies.repository.FollowRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    public List<Follow> findAll() {
        return followRepository.findAll();
    }

    public Optional<Follow> findById(String id) {
        return followRepository.findById(id);
    }

    public Follow save(Follow follow) {
        return followRepository.save(follow);
    }

    public void deleteById(String id) {
        followRepository.deleteById(id);
    }

    public boolean existsById(String id) {
        return followRepository.existsById(id);
    }

 
    public List<Follow> findByFollowedBy(String followedBy) {
        return followRepository.findByFollowedBy(followedBy);
    }

 
    public List<Follow> findByFollowedTo(String followedTo) {
        return followRepository.findByFollowedTo(followedTo);
    }
}

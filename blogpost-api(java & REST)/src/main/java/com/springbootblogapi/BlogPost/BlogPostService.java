package com.springbootblogapi.BlogPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogPostService {
    private final BlogPostRepository blogPostRepository;
    @Autowired
    public BlogPostService(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    public List<BlogPost> getBlogPost(){
             return blogPostRepository.findAll();
    }

    public void addNewBlogPost(BlogPost blogPost) {
        System.out.println(blogPost);
    }
}

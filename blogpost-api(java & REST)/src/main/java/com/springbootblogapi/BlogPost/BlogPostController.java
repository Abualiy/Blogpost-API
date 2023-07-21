package com.springbootblogapi.BlogPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "blogs")
public class BlogPostController {
// private final BlogPostService blogPostService;
//    @Autowired //here we are using dependencies injection to wire blogpostservice variable to the constructer
//    public BlogPostController(BlogPostService blogPostService) {
//        this.blogPostService =  blogPostService;
//    }
//
//    @GetMapping
//    public List<BlogPost> getBlogPost(){
//    return blogPostService.getBlogPost();
//    }
//   @PostMapping
//   public void addNewBlogPost(@RequestBody BlogPost blogPost){
//        blogPostService.addNewBlogPost(blogPost);
//   }
private final BlogPostRepository blogRepository;

   @Autowired
    public BlogPostController(BlogPostRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @GetMapping
    public List<BlogPost> getAllBlogs() {
        return blogRepository.findAll();
    }

    @PostMapping
    public BlogPost createBlog(@RequestBody BlogPost blog) {
        return blogRepository.save(blog);
    }

    @GetMapping("/{id}")
    public BlogPost getBlogById(@PathVariable Long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog", "id", id));
    }

    @PutMapping("/{id}")
    public BlogPost updateBlog(@PathVariable Long id, @RequestBody BlogPost blogDetails) {
        BlogPost blog = blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog", "id", id));

        blog.setTitle(blogDetails.getTitle());
        blog.setAuthor(blogDetails.getAuthor());
        blog.setContent(blogDetails.getContent());

        return blogRepository.save(blog);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable Long id) {
        blogRepository.deleteById(id);
    }
}




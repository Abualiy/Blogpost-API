package com.springbootblogapi.BlogPost;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // This Repository is responsible for Data Access Layer
public interface BlogPostRepository extends JpaRepository<BlogPost, Long>{
}

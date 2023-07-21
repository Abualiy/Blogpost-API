package com.springbootblogapi.BlogPost;

import jakarta.persistence.*;

import java.time.LocalDateTime;

// Defining my  API endpoints and the business logic
@Entity //this one is for hibernate
@Table(name = "blogs")
public class BlogPost {
    @Id
    @SequenceGenerator(
      name = "blogpost_sequence",
      sequenceName = "blogpost_sequence",
      allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "blogpost_sequence"
    )
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

   // @Column(columnDefinition = "TEXT")
    private String content;

    private String author;


    public BlogPost() {
    }

    public BlogPost(Long id,
                    String title,
                    String content,
                    String author
                    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public BlogPost(String title,
                    String content,
                    String author
                    ) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}

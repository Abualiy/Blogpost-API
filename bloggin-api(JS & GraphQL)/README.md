# Blogpost-API with Javascript GraphQL based

The Blog Post API is a GraphQL-based API built with Express.js and MongoDB. It allows you to perform CRUD operations (Create, Read, Update, Delete) on blog posts. This guide will walk you through the API operations and their usage.

## API Endpoints

### 1. Fetch all blog posts
- Endpoint: `'/graphql'`
- Query: <br>
<pre>
query {
  getBlogPosts {
    _id
    title
    content
    author
    date
  }
}
</pre>

### Example Response:

<pre>
{
  "data": {
    "getBlogPosts": [
      {
        "_id": "609d2edc4a2bfa0015222d6e",
        "title": "My First Blog Post",
        "content": "Lorem ipsum dolor sit amet...",
        "author": "John Doe",
        "date": "2023-07-18T10:15:24.792Z"
      },
      {
        "_id": "609d2f184a2bfa0015222d6f",
        "title": "Second Blog Post",
        "content": "Ut enim ad minim veniam...",
        "author": "Jane Smith",
        "date": "2023-07-18T10:16:08.183Z"
      }
    ]
  }
}
</pre>

### 2. Fetch a single blog post
- Endpoint: `'/graphql'`
- Query:
<pre>
query {
  getBlogPost(id: "YOUR_BLOG_POST_ID") {
    _id
    title
    content
    author
    date
  }
}
</pre>

### Example Response:

<pre>
{
  "data": {
    "getBlogPost": {
      "_id": "609d2edc4a2bfa0015222d6e",
      "title": "My First Blog Post",
      "content": "Lorem ipsum dolor sit amet...",
      "author": "John Doe",
      "date": "2023-07-18T10:15:24.792Z"
    }
  }
}
</pre>

### 3. Create a new blog post
- Endpoint: `'/graphql'`
- Mutation:
<pre>
mutation {
  createBlogPost(input: {
    title: "My New Blog Post",
    content: "Lorem ipsum dolor sit amet...",
    author: "John Doe"
  }) {
    _id
    title
    content
    author
    date
  }
}
</pre>

### Example Response:

<pre>
{
  "data": {
    "createBlogPost": {
      "_id": "609d2edc4a2bfa0015222d6e",
      "title": "My New Blog Post",
      "content": "Lorem ipsum dolor sit amet...",
      "author": "John Doe",
      "date": "2023-07-18T10:15:24.792Z"
    }
  }
}
</pre>

### 4. Update a blog post
- Endpoint: `'/graphql'`
- Mutation:
<pre>
mutation {
  updateBlogPost(id: "YOUR_BLOG_POST_ID", input: {
    title: "Updated Blog Post",
    content: "Updated content...",
    author: "John Doe"
  }) {
    _id
    title
    content
    author
    date
  }
}
</pre>

### Example Response:

<pre>
{
  "data": {
    "updateBlogPost": {
      "_id": "609d2edc4a2bfa0015222d6e",
      "title": "Updated Blog Post",
      "content": "Updated content...",
      "author": "John Doe",
      "date": "2023-07-18T10:15:24.792Z"
    }
  }
}
</pre>

### 5. Delete a blog post
- Endpoint: `'/graphql'`
- Mutation:
<pre>
mutation {
  deleteBlogPost(id: "YOUR_BLOG_POST_ID")
}
</pre>

### Example Response:

<pre>
{
  "data": {
    "deleteBlogPost": "Blog post deleted successfully"
  }
}
</pre>


## Error Handling

If an error occurs while processing a request, the API will respond with an appropriate error message and status code.

### Example Error Response:
<pre>
{
  "errors": [
    {
      "message": "Failed to create the blog post"
    }
  ]
}
</pre>

### Possible error messages:

- `'Failed to fetch blog posts'`: An error occurred while fetching blog posts.
- `'Failed to fetch the blog post'`: An error occurred while fetching a specific blog post.
- `'Failed to create the blog post'`: An error occurred while creating a new blog post.
- `'Failed to update the blog post'`: An error occurred while updating a blog post.
- `'Failed to delete the blog post'`: An error occurred while deleting a blog post.

## Conclusion

This developer guide provides an overview of the available API operations and their usage. You can now start integrating and utilizing the Blog Post API in your applications. Remember to replace YOUR_BLOG_POST_ID with the actual ID of the blog post when making requests.

If you have any further questions or issues, please don't hesitate to ask.
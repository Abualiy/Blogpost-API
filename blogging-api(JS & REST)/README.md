# Blogpost-API with Javascript REST based

The Blog Post API is a RESTful API built with Express.js and MongoDB. It allows you to perform CRUD operations (Create, Read, Update, Delete) on blog posts. This guide will walk you through the API endpoints and their usage.

## API Endpoints

### 1. Create a new blog post
- Endpoint: 'POST /posts'
- Request Body: <br>
    - `'title'`: The title of the blog post (string, required). <br>
    - `'content`': The content of the blog post (string, required). <br>
    - `'author'`: The author of the blog post (string, required). <br>

### Example Request:

<pre>
POST /posts
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "Lorem ipsum dolor sit amet...",
  "author": "John Doe"
}
</pre>

### Example Response:

<pre>
HTTP/1.1 200 OK
Content-Type: application/json

{
  "_id": "609d2edc4a2bfa0015222d6e",
  "title": "My First Blog Post",
  "content": "Lorem ipsum dolor sit amet...",
  "author": "John Doe",
  "date": "2023-07-18T10:15:24.792Z",
  "__v": 0
}
</pre>


### 2. Fetch all blog posts
- Endpoint: 'POST /posts;'

### Example Request:

<pre>
GET /posts
</pre>

### Example Response:

<pre>
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "_id": "609d2edc4a2bfa0015222d6e",
    "title": "My First Blog Post",
    "content": "Lorem ipsum dolor sit amet...",
    "author": "John Doe",
    "date": "2023-07-18T10:15:24.792Z",
    "__v": 0
  },
  {
    "_id": "609d2f184a2bfa0015222d6f",
    "title": "Second Blog Post",
    "content": "Ut enim ad minim veniam...",
    "author": "Jane Smith",
    "date": "2023-07-18T10:16:08.183Z",
    "__v": 0
  }
]
</pre>


### 3. Update a blog post
- Endpoint: 'POST /posts/:id'
- Request Parameters: <br>
    - `'id'`: The ID of the blog post to update.
- Request Body: <br>
    - `'title'`: The updated title of the blog post (string, required).. <br>
    - `'content'`: The updated content of the blog post (string, required). <br>
    - `'author'`: The updated content of the blog post (string, required). <br>

### Example Request:

<pre>
PUT /posts/609d2edc4a2bfa0015222d6e
Content-Type: application/json

{
  "title": "Updated Blog Post",
  "content": "Updated content...",
  "author": "John Doe"
}
</pre>

### Example Response:

<pre>
HTTP/1.1 200 OK
Content-Type: application/json

{
  "_id": "609d2edc4a2bfa0015222d6e",
  "title": "Updated Blog Post",
  "content": "Updated content...",
  "author": "John Doe",
  "date": "2023-07-18T10:15:24.792Z",
  "__v": 0
}
</pre>


### 3. Delete a blog post
- Endpoint: 'POST /posts/:id'
- Request Parameters: <br>
    - `'id'`: The ID of the blog post to delete.
### Example Request:

<pre>
DELETE /posts/609d2edc4a2bfa0015222d6e
</pre>

### Example Response:

<pre>
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Blog post deleted successfully"
}
</pre>



## Error Handling

If an error occurs while processing a request, the API will respond with an appropriate error message and status code.

### Example Error Response:
<pre>
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "error": "Failed to create the blog post"
}
</pre>

### Possible error messages:

- `'Failed to create the blog post'`: An error occurred while creating a new blog post.
- `'Failed to fetch blog posts'`: An error occurred while fetching blog posts.
- `'Failed to update the blog post'`: An error occurred while updating a blog post.
- `'Failed to delete the blog post'`: An error occurred while deleting a blog post.

## Conclusion

This developer guide provides an overview of the available API endpoints and their usage. You can now start integrating and utilizing the Blog Post API in your applications. Remember to replace the MongoDB connection URI in the code with your own database connection URI.

If you have any further questions or issues, please don't hesitate to ask.
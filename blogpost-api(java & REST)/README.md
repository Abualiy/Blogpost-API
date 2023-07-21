# Java Spring Boot API with REST
This Blog post api is build using a Java language by using a well know framework called spring boot which is built on top of the spring framework with Object-Relational database management systme called Postgresql.

This simple Blog api can perform the 4 basic CRUD Database operation which is :-
- creat a single blog
- read a single blog by id
- read an entire blog
- update a single blog by id
- and delet a single blog by id

## Each api requests and their resposnse end points 

### 1, <b>GET all blogs</b>
This single end point is responsible for fetching all blog from a database .
And it must return all blogs in the database in a json format.
- Endpoint: `'/blogs'`
- Example Request: <br>
<pre>
GET /blogs HTTP/1.1
Host: localhost:8080
</pre>

### Example Response:
<pre>
[
  {
    "id": 1,
    "title": "The Beauty of Nature's Serenade",
    "content": "Amidst lush meadows, I found solace in nature's embrace. Each flower whispered secrets, trees danced with the breeze, and the river sang its eternal song.",
    "author": "Yakob"
  },
  {
    "id": 3,
    "title": "Embracing Change: A Journey of Self-Discovery",
    "content": "Life's constant flux has taught me invaluable lessons. Embracing change, I discovered the courage to explore new horizons, uncovering my true potential.",
    "author": "Akrem"
  },
  {
    "id": 4,
    "title": "Captivated by the Enchanting Stars",
    "content": "Beneath a blanket of twinkling stars, the universe revealed its magic. In the vastness of the night sky, I found myself captivated by celestial wonders.",
    "author": "Nati"
  },
  {
    "id": 5,
    "title": "Finding Inner Peace Through Meditation",
    "content": "In the stillness of meditation, I embraced tranquility. Connecting with my inner self, I discovered profound peace and a path to navigate life's chaos.",
    "author": "Kedus"
  },
  {
    "id": 6,
    "title": "A Culinary Adventure: Exploring Exotic Flavors",
    "content": "Venturing into diverse cuisines, my taste buds rejoiced. Each dish carried a story, uniting cultures through a symphony of exotic flavors.",
    "author": "Ekram"
  },
  {
    "id": 2,
    "title": "The Beauty of Nature's Serenade",
    "content": "Amidst lush meadows, I found solace in nature's embrace. Each flower whispered secrets, trees danced with the breeze, and the river sang its eternal song.",
    "author": "Sura"
  }
]  
</pre>

- `'Failed to get all blog posts'`: An error occurred while fetching blog posts from unknown endpoint.
  
### 2, GET a single blog by id
This single end point is responsible for fetching a single blog with the specified id.
And it must return a single blog in json format.
- Endpoint: `'/blogs'`
- Example Request: <br>
<pre>
GET /blogs/1 HTTP/1.1
Host: localhost:8080
</pre>

### Example Response
<pre>
  {
  "id": 1,
  "title": "The Beauty of Nature's Serenade",
  "content": "Amidst lush meadows, I found solace in nature's embrace. Each flower whispered secrets, trees danced with the breeze, and the river sang its eternal song.",
  "author": "Yakob"
}
</pre>

- `'Failed to get a single blog post'`: An error occurred while fetching blog posts with wrong id.
  
### 3, Delete a single blog by id
This single api end point is responsible for deleting a blog from the database with the specified blog id.
It must return a success code which is 200 ok .
- Endpoint: `'/blogs'`
- Example Request: <br>
<pre>
DELETE /blogs/7 HTTP/1.1
Host: localhost:8080
</pre>

### Example Response
<pre>
  1
  Status code : 200 OK
</pre>

- `'Failed to delete the blog post'`: An error occurred while deleting a blog post with wrong id or unkonwn end point .
  
### 4, POST a single blog
This sing api end point is responsible for creating a sing blog and store it in the database.
And must return a success code which is 200 ok and a json file that show the created blog.
- Endpoint: `'/blogs'`
- Example Request: <br>
<pre>
POST /blogs HTTP/1.1
Host: localhost:8080
Content-Length: 252

 {
    "title": "A Culinary Adventure: Exploring Exotic Flavors",
    "author": "Ekram",
    "content": "Venturing into diverse cuisines, my taste buds rejoiced. Each dish carried a story, uniting cultures through a symphony of exotic flavors."
  }
</pre>

### Example Response
<pre>
  {
  "id": 7,
  "title": "A Culinary Adventure: Exploring Exotic Flavors",
  "content": "Venturing into diverse cuisines, my taste buds rejoiced. Each dish carried a story, uniting cultures through a symphony of exotic flavors.",
  "author": "Ekram"
}
</pre>

- `'Failed to post a blog post'`: An error occurred while posting a new blog post.
- `'forbidden  request'`: An error occurred while trying to post more than one blog post at a time.

### 5, PUT a single blog by id
This single api end point is responsible for updating an already created blog with the specified id.
And must return a json file which is an updated one.
- Endpoint: `'/blogs'`
- Example Request: <br>
<pre>
  PUT /blogs/2 HTTP/1.1
Host: localhost:8080
Content-Length: 251

{
    "title": "The Beauty of Nature's Serenade",
    "author": "Sura",
    "content": "Amidst lush meadows, I found solace in nature's embrace. Each flower whispered secrets, trees danced with the breeze, and the river sang its eternal song."
  }
</pre>

### Example Response
<pre>
  {
  "id": 2,
  "title": "The Beauty of Nature's Serenade",
  "content": "Amidst lush meadows, I found solace in nature's embrace. Each flower whispered secrets, trees danced with the breeze, and the river sang its eternal song.",
  "author": "Sura"
}  
</pre>

- `'Failed to put the blog post'`: An error occurred while updating a blog post with wrong id.

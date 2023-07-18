const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://akremmuktar:J9K4kWVLf6kNKEKz@cluster0.heirxbv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Error connecting to the database:', err);
});

// Schema definition
const schema = buildSchema(`
  type BlogPost {
    _id: ID!
    title: String!
    content: String!
    author: String!
    date: String!
  }

  input BlogPostInput {
    title: String!
    content: String!
    author: String!
  }

  type Query {
    getBlogPosts: [BlogPost!]!
  }

  type Mutation {
    createBlogPost(input: BlogPostInput!): BlogPost
    updateBlogPost(id: ID!, input: BlogPostInput!): BlogPost
    deleteBlogPost(id: ID!): String
  }
`);

// BlogPost model
const BlogPost = mongoose.model('BlogPost', {
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

// Resolver functions
const root = {
  getBlogPosts: async () => {
    try {
      return await BlogPost.find();
    } catch (err) {
      throw new Error('Failed to fetch blog posts');
    }
  },
  createBlogPost: async ({ input }) => {
    try {
      return await BlogPost.create(input);
    } catch (err) {
      throw new Error('Failed to create the blog post');
    }
  },
  updateBlogPost: async ({ id, input }) => {
    try {
      return await BlogPost.findByIdAndUpdate(id, input, { new: true });
    } catch (err) {
      throw new Error('Failed to update the blog post');
    }
  },
  deleteBlogPost: async ({ id }) => {
    try {
      await BlogPost.findByIdAndDelete(id);
      return 'Blog post deleted successfully';
    } catch (err) {
      throw new Error('Failed to delete the blog post');
    }
  },
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

// Server listening
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

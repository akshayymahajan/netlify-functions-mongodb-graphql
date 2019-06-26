# Netlify Functions: MongoDB + GraphQL

A Netlify functions template for Apollo Server GraphQL API with MongoDB.

## Local Development
Clone the repository and run ```npm i``` at the root of repository to install all dependencies.

### db.js

Edit ```db.js``` with your MongoDB connection string and Database Name.
```
const URI = "";
const DB_NAME = "todos";
```



### typedefs.js

Edit ```typedefs.js``` according to your GraphQL schema.
```
type Todo {
  id: ID!
  title: String!
  completed: Boolean!
}

type Query {
  allTodos: [Todo]
}
```

### resolvers.js

Edit ```resolvers.js``` to return the resolvers for your schema.
```
{
  Query: {
    allTodos: async () =>
      await db
        .collection("todos")
        .find()
        .toArray()
  }
}
```

### Run Dev Server

Open a terminal and run ```netlify dev``` to start the dev server. It will start Netlify Dev Sever on http://localhost:8888. To access GraphQL Playground, visit http://localhost:8888/.netlify/functions/mongodb-graphql in a browser window.

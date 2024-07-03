const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

// Define the TaskType object
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

// Define the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define your root query fields here
  },
});

// Create the GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation, // Uncomment if you have mutations
});

module.exports = schema;

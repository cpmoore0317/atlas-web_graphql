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
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return {
          id: args.id,
          title: 'Simple Task',
          weight: 1,
          description: 'This is a simple task description'
        };
      },
    },
  },
});

// Create the GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;

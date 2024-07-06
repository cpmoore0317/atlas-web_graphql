const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema'); // Update the path if necessary

const app = express();

// Replace the following string with your MongoDB connection string
const dbURI = 'mongodb+srv://cpmoore317:Cocobutter2@@testcluster.8qe4gop.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

// client/src/App.js

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import YourComponent from './YourComponent'; // Replace with your actual component

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>My Apollo App</h1>
        <YourComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;

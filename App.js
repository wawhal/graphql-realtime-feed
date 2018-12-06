import React from 'react';
import Home from './src/Home';
import { HttpLink } from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const GRAPHQL_ENDPOINT = `byteconfreactnative.herokuapp.com/v1alpha1/graphql`;
const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_ENDPOINT}`,
});
const wsLink = new WebSocketLink({
  uri: `wss://${GRAPHQL_ENDPOINT}`
});
const combinedLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  link: combinedLink,
  cache: new InMemoryCache()
});
const App = () => (
  <ApolloProvider client={client}>
    <Home client={client}/>
  </ApolloProvider>
);

export default App;

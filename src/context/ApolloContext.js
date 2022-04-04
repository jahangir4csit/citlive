//import ApolloClient from 'apollo-boost';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://bangladeshigf.org/cit/graphql`,
  //uri: `http://localhost/citbd/graphql`,
  cache: new InMemoryCache()
})
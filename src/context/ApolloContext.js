//import ApolloClient from 'apollo-boost';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `https://app.creativeitinstitute.com/graphql`,
  //uri: `http://localhost/citbd/graphql`,
  cache: new InMemoryCache()
})
export default client;
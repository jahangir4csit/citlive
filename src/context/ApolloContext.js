//import ApolloClient from 'apollo-boost';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://bangladeshigf.org/cit/graphql`,
  cache: new InMemoryCache()
})
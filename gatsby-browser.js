import React from 'react';
//import { ApolloProvider } from 'react-apollo';
import { client } from './src/context/ApolloContext';

import {
  ApolloProvider
} from "@apollo/client";

/* ** Importing style *** */
import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
import './node_modules/slick-carousel/slick/slick.css'
import './node_modules/slick-carousel/slick/slick-theme.css'
import './node_modules/react-modal-video/css/modal-video.min.css';


export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);


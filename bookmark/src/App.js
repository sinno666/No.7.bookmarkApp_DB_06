import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

import { GetBooks } from './Select';
import { InsertBooks } from './Insert';
import { DeleteBooks } from './Delete';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      // headers: {
      //   AUthorization: `Bearer ${authToken}`,
      // },
    }),
    cache: new InMemoryCache(),
  });
};

// import { useAuth0 } from './Auth/react-auth0-spa';

const App = () => {
  const client = createApolloClient();
  console.log(client);
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Bookmark</h1>
        <p>本のタイトルを入力→Addで登録、IDを入力→Deleteで削除</p>
        <GetBooks />
        <InsertBooks />
        <DeleteBooks />
      </div>
    </ApolloProvider>
  );
};

export default App;

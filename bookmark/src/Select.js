import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query getBooks {
    test {
      id
      title
    }
  }
`;

// GetBooksの取得結果からid,titleをpropにもらって描画する
const Bookli = ({ id, title }) => {
  console.log(title);
  return (
    // <li key={id}>
    //   {id}:{title}
    // </li>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  );
};

const GetBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, { pollInterval: 6000 });
  // const [bookState, setBookState] = useState('');
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
      {data.test.map((book) => (
        <Bookli key={book.id} id={book.id} title={book.title} />
      ))}
    </table>
  );
};

export { GET_BOOKS, GetBooks };

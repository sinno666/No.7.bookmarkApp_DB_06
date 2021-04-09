import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_BOOKS } from './Select';

const INSERT_BOOKS = gql`
  mutation insert($title: String!) {
    insert_test(objects: { title: $title }) {
      affected_rows
      returning {
        title
      }
    }
  }
`;

const InsertBooks = () => {
  const [inputState, setInputState] = useState('');
  const [addBook] = useMutation(INSERT_BOOKS);
  const onChange = (e) => {
    setInputState(e.currentTarget.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook({ variables: { title: inputState } });
        setInputState('');
      }}
    >
      <div>
        <input
          value={inputState}
          onChange={onChange}
          placeholder="Input a book name"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export { INSERT_BOOKS, InsertBooks };

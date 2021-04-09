import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const DELETE_BOOKS = gql`
  mutation delete_book($id: Int!) {
    delete_test(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const DeleteBooks = () => {
  const [inputState, setInputState] = useState('');
  const [addBook] = useMutation(DELETE_BOOKS);
  const onChange = (e) => {
    setInputState(e.currentTarget.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook({ variables: { id: inputState } });
        setInputState('');
      }}
    >
      <div>
        <input
          value={inputState}
          onChange={onChange}
          placeholder="Input a book ID"
        />
        <button type="submit">Delete</button>
      </div>
    </form>
  );
};

export { DELETE_BOOKS, DeleteBooks };

import { useState } from 'react';
import { InputContainer, Input, Button } from './SearchForm.styled';

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const hendlChange = e => {
    setQuery(e.target.value);
  };

  return (
    <InputContainer>
      <Input type="text" value={query} onChange={hendlChange}></Input>
      <Button onClick={() => handleSubmit(query)}>Search</Button>
    </InputContainer>
  );
};

export default SearchForm;

import { useState } from 'react';
import { InputContainer, Input, Button } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const hendlChange = e => {
    setQuery(e.target.value);
  };
  const resetForm = () => {
    setQuery('');
  };

  return (
    <InputContainer>
      <Input type="text" value={query} onChange={hendlChange}></Input>
      <Button
        onClick={() => {
          handleSubmit(query);
          resetForm();
        }}
      >
        Search
      </Button>
    </InputContainer>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
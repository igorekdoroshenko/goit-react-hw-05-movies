import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;

    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      alert('Search query can not be empty.');
      return;
    }
    onSubmit(value);
    clearForm();
  };

  const clearForm = () => {
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={value}
        type="text"
        autoFocus
        placeholder="Search films"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

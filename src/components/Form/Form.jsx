import { useState } from 'react';


const Form = ({searchMovies }) => {
  const [query, setQuery] = useState('');
  
    
    const handleChange = event => {
        setQuery(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        searchMovies(query.toLowerCase());
  };
  

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleChange}
          />
          <button type='submit'>Search</button>
    </form>
  );
};

export default Form;
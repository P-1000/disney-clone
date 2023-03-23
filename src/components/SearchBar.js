// SearchBar.js

import React, { useState } from 'react';

function SearchBar(props) {
  const { handleSearch } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form
    className='mx-4 px-4 mt-4 lg:hidden'
     onSubmit={handleSubmit}>
      <input 
      className='outline-none focus:outline-none bg-none px-4  text-slate-700 text-lg'
      type="text" value={searchQuery} onChange={handleChange} />
      <button 
      className='border px-2 rounded-sm '
      type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

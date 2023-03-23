// SmallScreenSearchBar.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SmallScreenSearchBar(props) {
  const { handleSearch } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
    history.push('/search');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SmallScreenSearchBar;

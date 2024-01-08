// SearchBar.js

import React, { useState } from 'react';

function SearchBar(props) {
  const { handleSearch } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleSearch(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <form className="flex items-center mx-4 px-4 mt-4 lg:mt-0 lg:ml-auto lg:mr-4 mb-2">
      <input
        className="outline-none focus:outline-none px-4 py-2 text-white bg-gray-900 text-lg rounded-xl w-full"
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search Movies, Tv Shows, Actors, Anime, ..."
      />
    </form>
  );
}

export default SearchBar;

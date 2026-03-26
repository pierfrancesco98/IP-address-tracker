import React, {useState} from 'react';
import arrow from '../images/icon-arrow.svg';

function SearchBar({handleSearch}) {
   const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <form className='search-container' onSubmit={handleSubmit}>
     <input
        className="search-input"
        type="text"
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-btn" type='submit'>
       <img src={arrow} alt="arrow" className='icon' />
      </button>
    </form>
  )
};

export default SearchBar;

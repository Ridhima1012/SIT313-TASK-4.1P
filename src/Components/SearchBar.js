// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Perform search or any other action based on searchText
//     console.log('Searching for:', searchText);
//   };

//   return (
//     <div className="search-bar">
//       <form onSubmit={handleSearchSubmit}>
//       <p> dev deakin </p>
//         <input
       
//           type="text"
//           value={searchText}
//           onChange={handleSearchChange}
//           placeholder="Search... "
//         />
//         <button type="submit post ">Search</button>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import './SearchBar.css';


const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search or any other action based on searchText
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search-bar">
      <p>DEV@Deakin</p>
      <form onSubmit={handleSearchSubmit}>
        <input
          // type="text"
          // value={searchText}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <p>Post</p>
      <p>login</p>
      
    </div>
  );
};

export default SearchBar;



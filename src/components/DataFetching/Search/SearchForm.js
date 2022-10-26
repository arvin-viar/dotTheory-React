import React, {useState} from 'react';

const SearchForm = ({performSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(searchValue);
    e.currentTarget.reset();
  };

  return (
    <div className="form-container">
      <form
        className="search-form"
        onSubmit={handleSubmit}
      >

        <input
          type="search"
          onChange={onSearchChange}
          name="search"
          placeholder="Search..."
        />

        <button
          type="submit"
          id="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;


// import React, { Component } from 'react';

// export default class SearchForm extends Component {

//   state = {
//     searchText: ''
//   }

//   onSearchChange = e => {
//     this.setState({ searchText: e.target.value });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     e.currentTarget.reset();
//   }

//   render() {
//     return (
//       <form className="search-form" onSubmit={this.handleSubmit} >
//         <label className="is-hidden" htmlFor="search">Search</label>
//         <input type="search"
//                onChange={this.onSearchChange}
//                name="search"
//                placeholder="Search..." />
//         <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
//       </form>
//     );
//   }
// }

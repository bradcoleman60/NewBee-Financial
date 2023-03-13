import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Autocomplete from 'react-autocomplete';

import { QUERY_COMPANY } from '../../utils/queries';


// import './style.css'
export default function Companies() {
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    // Filter the options based on the user's input
    const filteredOptions = data.companies
      .map((el) => el.name)
      .filter((option) =>
        option.toLowerCase().includes(event.target.value.toLowerCase())
      );

    setFilteredOptions(filteredOptions);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const { loading, error, data } = useQuery(QUERY_COMPANY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleMouseEnter = (event) => {
    event.target.classList.add('active');
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove('active');
  };

  return (
    <div>
      <label htmlFor="autocomplete-dropdown">Select a Company to Add to your Listing:</label>
      <Autocomplete
        id="autocomplete-dropdown"
        value={selectedOption}
        items={filteredOptions}
        getItemValue={(item) => item}
        onChange={handleChange}
        onSelect={handleSelect} // Add this onSelect callback
        renderInput={(props) => (
        
          <input {...props} className="form-control" />
          
           )}
        renderMenu={(items) => (
          <div className="dropdown-menu">
            {items.map((item) => (
              <div key={item._id} className="dropdown-item"
              onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        renderItem={(item, isHighlighted) => (
          <div
            key={item}
            id={item.cik}
            className={`dropdown-item ${isHighlighted ? 'active' : ''}`}
          >
            {item}
          </div>
          
        )}
        />
        <div>
          <button>
          Submit
          </button>
          </div>
    </div>
  );
}

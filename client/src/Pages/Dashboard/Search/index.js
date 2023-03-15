import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Autocomplete from 'react-autocomplete';
import { useCompanyContext } from "../../../utils/companyContext";
import { QUERY_COMPANY } from '../../../utils/queries';
import { SAVE_COMPANY } from '../../../utils/mutations';
import Auth from "../../../utils/auth"
import { idbPromise } from "../../../utils/helper";


// import './style.css'
export default function Companies() {
  const [ selectedOption, setSelectedOption] = useState('');
  const [ filteredOptions, setFilteredOptions] = useState([]);
  const { loading, error, data } = useQuery(QUERY_COMPANY);
  const [companyState, dispatch ] = useCompanyContext();  
  const [ saveCompany] = useMutation(SAVE_COMPANY);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    // Filter the options based on the user's input
    const filteredOptions = data.companies
      .map((el) => el.name)
      .filter((option) =>
        option.toLowerCase().includes(event.target.value.toLowerCase())
      );

    setFilteredOptions(filteredOptions);

    // console.log("filteredOptions ===> ", filteredOptions)
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  

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

  

  const saveCompanyToUser = (event) => {
    event.preventDefault();
    // console.log("the company selected by user : ", selectedOption)
    data.companies.forEach(async el =>  {
      if (selectedOption === el.name ){
        const { __typename, _id, ...newObj} = el

      // console.log("data: ", el)
      // console.log("NEW OBJECT THIS IS IT ====>>>: ", newObj)
      console.log("User Profile : ", Auth.getProfile())
      const user = Auth.getProfile()
      // console.log("the Actual user _id: ", user.data._id)
       try{
        const { data } = await saveCompany({ 
          variables: { 
            _id: user.data._id, 
            company: newObj 
          } 
        });
        // console.log("data right after saveCompanyToUser", data)
       }catch(err)
       {
        // console.log("error fom client", err)
        console.log("newObj")
console.log(newObj)
        dispatch({ type: SAVE_COMPANY, payload: el });
        const savedCompanies = await idbPromise("get",);
        idbPromise("put", el);
       }

    }
  });

  }

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
            {items.map((item,i) => (
              <div key={i} className="dropdown-item"
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
            // key={item._id}
            // id={item.cik}
            className={`dropdown-item ${isHighlighted ? 'active' : ''}`}
          >
            {item}
          </div>
          
        )}
        />
        <div>
          <button onClick={saveCompanyToUser}>
          Submit
          </button>
          </div>
    </div>
  );
}

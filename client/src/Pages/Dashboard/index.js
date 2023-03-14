import React, { useEffect, useState } from "react";
import { useCompanyContext } from "../../utils/companyContext";
import { SAVE_COMPANY, REMOVE_COMPANY } from "../../utils/actions";
import Data from "./Data";
import Articles from "./Articles";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_COMPANY } from '../../utils/queries'
import "./style.css";
import { idbPromise } from "../../utils/helper";
import Companies from "../../Components/Companies"
export default function Dashboard () {
      // Initialize state using the CompanyContext
  const [, dispatch ] = useCompanyContext();  
  // Initialize local state for search query and company data
  const [search, setSearch] = useState("");
  const [companyData, setCompanyData] = useState(null);
    // Initialize local state for loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch company data using a GraphQL query on search submit
  const { loading: searchLoading, error: searchError, data: searchData } = useQuery(QUERY_COMPANY, {
    variables: { name: search },
    skip: !search, // Skip query if search is empty
    onCompleted: (data) => { // When query is completed successfully, update state and local state
        setLoading(false);
      setCompanyData(data.company);
    },
    onError: (err) => { // When query results in an error, update error message and local state
        setError(err.message);
      setLoading(false);
    }
  });

    // Update local state based on loading and error messages from GraphQL query
  useEffect(() => {
    setLoading(searchLoading);
    setError(searchError);
  }, [searchLoading, searchError]);

// save company to local storage and state
const handleSaveCompany = async () => {
    dispatch({ type: SAVE_COMPANY, payload: companyData });
    const savedCompanies = await idbPromise("savedCompanies", "get",);
    idbPromise.put("savedCompanies", [...savedCompanies, companyData]);
  };

  // remove company from local storage and state
const handleRemoveCompany = async () => {
    dispatch({ type: REMOVE_COMPANY, payload: companyData });
    const savedCompanies = await idbPromise("savedCompanies", "get",);

    if (savedCompanies) {
    const updatedSavedCompanies = savedCompanies.filter((savedCompany) => savedCompany._id !== companyData._id);
    idbPromise("savedCompanies", "put", updatedSavedCompanies);
    }
  };

  useEffect(() => {
    // fetch saved company data on initial render
    const fetchSavedData = async () => {
      setLoading(true);
      setError(null);
      try {
        // retrieve saved data from idbPromise
        const savedData = await idbPromise("savedCompanies", "get",);
        // update state with saved data
        dispatch({ type: SAVE_COMPANY, companies: savedData });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchSavedData();
  }, [dispatch]);

//   useEffect(() => {
//     // update idbPromise with saved company data
//     idbPromise.put("savedCompanies", savedCompanies);
//   }, [savedCompanies]);

    // Render search form and company data components
  return (
        <div>
          <button onClick={handleSaveCompany}>Save Company</button>
          <button onClick={handleRemoveCompany}>Remove Company</button>
          <Companies />
          <Data />
          <Articles />
        </div>
  
  );
};

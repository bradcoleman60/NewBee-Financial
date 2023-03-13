import React, { createContext, useContext } from "react";
// import { useCompanyReducer } from './reducers'

const CompanyContext = createContext();
const { Provider } = CompanyContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCompanyReducer({
    revenue: null,
    revenue1: null,
    netIncome: null,
    cash: null,
    cashFlow: null,
    cashFlow1: null,
    eps: null,
    eps1: null,
    currentAsset: null,
    currentLiabilities: null,
    taxesPaid: null,
    taxesPaid1: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCompanyContext = () => {
  return useContext(CompanyContext);
};

export { CompanyProvider, useCompanyContext };

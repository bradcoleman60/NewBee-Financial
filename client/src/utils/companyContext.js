import React, { createContext, useContext } from "react";
import { useCompanyReducer } from './reducers';

const CompanyContext = createContext();
const { Provider } = CompanyContext;

const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useCompanyReducer();

  return <Provider value={[ state, dispatch ]}>{children}</Provider>;
};

const useCompanyContext = () => {
  return useContext(CompanyContext);
};

export { CompanyProvider, useCompanyContext };




import { gql } from '@apollo/client';


//Get all Companies To Render for Input/ Option Select
export const QUERY_COMPANY = gql`
  {
    companies {
      _id
      cik
      name
      ticker
      exchange
      revenue
      revenue1
      netIncome
      cash
      cashFlow
      cashFlow1
      eps
      eps1
      currentAsset
      currentLiabilities
      taxesPaid
      taxesPaid1
    }
  }
`;

//Get User and all Saved Companies and Associated Data

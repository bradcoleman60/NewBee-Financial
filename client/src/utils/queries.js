import { gql } from '@apollo/client';

export const QUERY_USER = gql`
{
  user(_id: $_id) {
    username,
    savedCompanies {
      name
      cash
      cashFlow
      cashFlow1
      cik
      currentAsset
      currentLiabilities
      exchange
      netIncome
      revenue
      revenue1
      taxesPaid
      taxesPaid1
      ticker
      eps
      eps1
    }
  }
}`

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

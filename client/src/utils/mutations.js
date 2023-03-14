import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($_id: ID!, $username: String, $email: String, $password: String) {
    updateUser(_id: $_id, username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

// Mutation to delete a user
export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
      username
      email
    }
  }
`;

const SAVE_COMPANY = gql`
  mutation SaveCompany($company: CompanyInput!) {
    saveCompany(company: $company) {
      _id
      savedCompanies {
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
  }
`;

// Mutation to remove a company
export const REMOVE_COMPANY = gql`
  mutation removeCompany($cik: Int!) {
    removeCompany(cik: $cik) {
      _id
      username
      email
      savedCompanies {
        _id
        cik
        name
        ticker
      }
    }
  }
`;
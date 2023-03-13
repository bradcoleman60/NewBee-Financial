const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedCompanies: [Company]
  }

  type Company {
    _id: ID
    cik: Int
    name: String
    ticker: String
    exchange: String
    revenue: String
    revenue1: String
    netIncome: String
    cash: String
    cashFlow: String
    cashFlow1: String
    eps: Float
    eps1: Float
    currentAsset: String
    currentLiabilities: String
    taxesPaid: String
    taxesPaid1: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input CompanyInput {
    cik: Int
    name: String
    ticker: String
    exchange: String
    revenue: String
    revenue1: String
    netIncome: String
    cash: String
    cashFlow: String
    cashFlow1: String
    eps: Float
    eps1: Float
    currentAsset: String
    currentLiabilities: String
    taxesPaid: String
    taxesPaid1: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    companies: [Company]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, username: String, email: String, password: String): User
    deleteUser(_id: ID!): User
    addCompany(company: CompanyInput!): User
    removeCompany(cik: Int!): User
  }
  
`;

module.exports = typeDefs;

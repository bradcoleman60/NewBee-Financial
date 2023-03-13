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

    type Query {
        users: [User]
        user (_id: String): User
        companies: [Company]
       
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        
        addCompany(_id: String!, cik: Int!): User
        removeCompany(userId: ID!, cik: Int!): User
        
        updateUser(_id: Int!): User
        deleteUser(_id: String!) : User
    }
`

module.exports = typeDefs
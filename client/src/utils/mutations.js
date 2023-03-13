import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      id
      username
    }
  }
`;

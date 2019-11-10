import gql from "graphql-tag";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(
      name: $name
      authProvider: { email: { email: $email, password: $password } }
    ) {
      email
      id
      name
      password
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation SigninUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        name
        password
      }
    }
  }
`;

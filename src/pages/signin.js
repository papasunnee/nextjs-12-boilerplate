import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER_MUTATION } from "../graphql/mutation";

const initial = {
  email: "",
  password: "",
  error: null
};

const Signup = () => {
  const [signinUser, { data, loading, error }] = useMutation(
    LOGIN_USER_MUTATION
  );

  const [signinField, setSigninField] = useState(initial);

  const handleChange = e => {
    const updatedValue = { [e.target.name]: e.target.value };
    setSigninField(prevValues => {
      return {
        ...prevValues,
        ...updatedValue,
        error: null
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await signinUser({
      variables: {
        email: signinField.email,
        password: signinField.password
      }
    });

    console.log({ error });
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        {error ? (
          <p>
            <strong>
              {error.toString().replace("Error: GraphQL error:", "")}
            </strong>
          </p>
        ) : (
          ""
        )}
        <label>Email</label>
        <input
          type="email"
          name="email"
          id=""
          required
          value={signinField.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id=""
          required
          onChange={handleChange}
          value={signinField.password}
        />
        <button>{loading ? "Logging In" : "Login"}</button>
      </form>
      <style jsx>{`
        form {
          width: 800px;
          margin: 20px auto;
          max-width: 90%;
        }
        form p {
          text-align: center;
        }
        form * {
          display: block;
          width: 100%;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default Signup;

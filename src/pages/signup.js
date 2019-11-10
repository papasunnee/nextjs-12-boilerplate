import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER_MUTATION } from "../graphql/mutation";

const initial = {
  email: "",
  password: ""
};

const Signup = () => {
  const [createUser, { data, loading, error }] = useMutation(
    CREATE_USER_MUTATION
  );
  const [signupField, setSignupField] = useState(initial);

  const handleChange = e => {
    const updatedValue = { [e.target.name]: e.target.value };
    setSignupField(prevValues => {
      return {
        ...prevValues,
        ...updatedValue
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createUser({
      variables: {
        name: "papasunnee",
        email: signupField.email,
        password: signupField.password
      }
    });
  };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id=""
          required
          value={signupField.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id=""
          required
          onChange={handleChange}
          value={signupField.password}
        />
        <button>{loading ? "Submitting" : "Submit"}</button>
      </form>
      <style jsx>{`
        form {
          width: 800px;
          margin: 20px auto;
          max-width: 90%;
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

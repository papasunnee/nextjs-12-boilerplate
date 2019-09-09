import React from "react";

const NewsLetter = () => {
  return (
    <form
      className="form-inline newsletter"
      onSubmit={e => {
        e.preventDefault();
        alert("Contact Developer");
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control email-field"
          placeholder="Email Address"
          required
        />
        <button className="btn btn-success submit">Submit</button>
      </div>
    </form>
  );
};

export default NewsLetter;

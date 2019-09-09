import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const withLayout = WrappedComponent => {
  const WithLayout = props => {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
  return WithLayout;
};

export default withLayout;

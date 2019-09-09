import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default () => {
  return (
    <CookieConsent
      location="top"
      buttonText="I Accept"
      cookieName="newHaven"
      enableDeclineButton="true"
      declineButtonText="Close"
      declineButtonStyle={{
        background: "#c12a2a",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "#e5e5e5",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px"
      }}
      style={{
        background: "#B2E7FA",
        position: "sticky",
        color: "#000"
      }}
      buttonStyle={{
        color: "#4e503b",
        fontSize: "13px",
        background: "#ffd42d",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "black",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px"
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};

import React, { Component } from "react";

import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";

export default function requireUser(Child) {
  class WrappedComponent extends Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context);
      }

      //Validate loggedin user
      const response = await checkLoggedIn(context.apolloClient);
      console.log({ response });

      const { isAuthenticated } = response;
      // const { isAuthenticated } = await checkLoggedIn(context.apolloClient);
      if (!isAuthenticated) {
        // If not signed in, send them somewhere more useful
        redirect(context, "/");
      }

      return {
        ...ChildProps,
        isAuthenticated
      };
    }

    render() {
      return <Child {...this.props} />;
    }
  }

  return WrappedComponent;
}

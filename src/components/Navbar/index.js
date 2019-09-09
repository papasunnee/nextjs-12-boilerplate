import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import NavMenu from "./NavMenu";
import "./index.scss";

export default props => {
  const [state, setState] = useState({
    isOpen: false
  });

  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };

  return (
    <Navbar color="light" light expand="md">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Company Brand</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavMenu />
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

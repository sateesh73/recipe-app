import React, { useState } from "react";
import {
  Collapse,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <Container>
          <h1 className="display-3">Recipe Book App</h1>
          <InputGroup>
            <Input placeholder="Search your food here...." />
            <InputGroupAddon addonType="append">
              <InputGroupText>Search here</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">
                reactstrap
              </NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <hr className="my-2" />
        </Container>
      </Jumbotron>
    </div>
  );
};

/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "shards-react";

//icon imports
import { FaTwitter, FaInstagram, FaGithubAlt } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class StickyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen,
      },
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  }

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand href="#">Simple Snake 🐍</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="#">
                Dev Logs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="#">
                About
              </NavLink>
            </NavItem>
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Donate
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <a
                    href="https://paypal.me/DemiGodProductions"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    PayPal
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    href="https://paypal.me/DemiGodProductions"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Bitcoin
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a
                    href="https://paypal.me/DemiGodProductions"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    XMR
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>

          <Nav navbar className="ml-auto">
            <NavItem className="pr-2">
              <a
                href="https://twitter.com/zaycationdev"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaTwitter />
              </a>
            </NavItem>
            <NavItem className="pr-2">
              <a
                href="https://instagram.com/zaycationdev"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaInstagram />
              </a>
            </NavItem>

            <NavItem className="pr-2">
              <a
                href="https://github.com/zaycation"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaGithubAlt />
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

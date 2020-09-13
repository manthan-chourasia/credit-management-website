
import React, { Component } from 'react';


import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md" className="fixed-top">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.jpg' height="30" width="41" alt='logo' /></NavbarBrand>
                        <NavbarBrand class="navbar-brand "  href="#"><span></span>credit management</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/view'><span className="fa fa-list fa-lg"></span> View users</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink className="nav-link"  to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

              
            </div>
        );
    }
}
export default Header;
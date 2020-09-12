import React, { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/ContextUser';

import './styles.css';

const TopNav = () => {
  const { IsLoggedIn, setIsloggedIn } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    setIsloggedIn(false);
  };

  return IsLoggedIn ? (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} />
        <Link to="/login" onClick={logoutHandler}>
          <Button outline color="danger">
            Logout
          </Button>
        </Link>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/events">New Event</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Dashboard</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  ) : (
    ''
  );
};

export default TopNav;

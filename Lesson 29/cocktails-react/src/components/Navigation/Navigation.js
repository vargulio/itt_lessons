import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {useSelector} from 'react-redux';

function Navigation() {

  const profilePic = useSelector(state => state.profile.profilePic);

  return (
    <Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/cocktails/catalog">
            Cocktails
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-1" to="/cocktails/filters">
            Filters
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Link to="/profile">
          <Image
            src={profilePic}
            alt="Profile"
            roundedCircle
            width={40}
            height={40}
            className="ml-auto"
          />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

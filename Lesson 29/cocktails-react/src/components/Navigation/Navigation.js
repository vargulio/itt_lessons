import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link><Link to="/cocktails/catalog">Cocktails</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to="/cocktails/filters">Filters</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
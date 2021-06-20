import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../../../App";

const NavBar = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className='shadow p-2 rounded'>
      <div className="container">
        <Navbar.Brand href="/home">
          <h2 className='m-0 font-monospace border-1'>Softonic Solution</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/aboutUs">About Us</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/contact">Contact </Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>
            <button as={Link} to="/login" className='btn btn-primary btn-sm'>Login</button>
            {/* {  localStorage.getItem('user')   ? <button onClick={ () => setLoggedInUser(!localStorage.removeItem('user') )} className='btn btn-danger'>LogOut</button> : <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
            } */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;

import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const {  user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' >All News</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ? 
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant='light'>Log out</Button>
                                    </>
                                :
                                    <>
                                        <Link to='/login' className='me-2'>Login</Link>
                                        <Link to='/register' className='me-2'>Register</Link>
                                    </>
                            }
                            
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                <Image
                                 style={{height: '30px'}} roundedCircle src={user.photoURL}></Image>
                                : 
                                <FaUserAlt></FaUserAlt>

                            }
                        </Nav.Link>
                    </Nav>
                    <div className="d-lg-none">
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
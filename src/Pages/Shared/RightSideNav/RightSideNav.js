import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';



const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub className='me-2'></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className="mt-4">
                <h2>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook className='me-2'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp className='me-2'></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram className='me-2'></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter className='me-2'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch className='me-2'></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
            
        </div>

    );
};

export default RightSideNav;
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummaryCard = ({ news }) => {
    const { _id, author, details, image_url, rating, title, total_view } = news;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex '>
                <div className="d-flex align-items-center">
                    <Image
                    roundedCircle
                    className='me-2'
                    src={author.img}
                    style={{height: '60px'}}
                    ></Image>
                    <div className="">
                        <p className='mb-0 mt-2'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="">
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 150 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>

                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;
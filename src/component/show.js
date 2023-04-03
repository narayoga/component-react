import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function Show() {

    const products = useSelector(state => state.products)

    return (
        <ListGroup variant="flush" style={{ width: "50%", margin: "10% auto" }}>
            {products.map((product, index) => (
                <div key={index}>
                    < ListGroup.Item>{product.name}: {product.price}</ListGroup.Item>
                </div>
            ))}
            <div className='d-flex justify-content-end'>
                <a href='/add'>add</a>
            </div>
        </ListGroup>
    )
}

export default Show;


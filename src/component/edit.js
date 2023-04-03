import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

function Edit() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    return (
        <Form style={{ width: "50%", margin: "50px auto" }}>
            <div style={{ textAlign: "center" }}>EDIT PAGE</div>
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <div className='d-flex justify-content-between'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className='d-flex justify-content-between' style={{ width: "100px" }}>
                    <a href='/'>show</a>
                    <a href='/add'>add</a>
                </div>
            </div>
        </Form>
    )
}

export default Edit;


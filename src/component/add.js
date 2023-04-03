import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct  } from '../redux/reduxTool';

function Add() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addProduct({ name, price }))
    setName('')
    setPrice('')
  };

  return (
    <Form onSubmit={submitHandler} style={{ width: '50%', margin: '50px auto' }}>
      <div style={{ textAlign: 'center' }}>ADD PAGE</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" value={price} onChange={e => setPrice(e.target.value)} />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="d-flex justify-content-between" style={{ width: '100px' }}>
          <a href="/">show</a>
          <a href="/edit">edit</a>
        </div>
      </div>
    </Form>
  );
}

export default Add;

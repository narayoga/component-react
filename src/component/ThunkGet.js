import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct } from '../redux/asynchronus/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      title: name,
      price: price,
      description: 'New product',
      category: 'Others',
      image: 'https://via.placeholder.com/150',
    };
    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
      <h2>Add New Product</h2>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
      <button onClick={()=> console.log(products)}>show log</button>
    </div>
  );
}

export default ProductList;
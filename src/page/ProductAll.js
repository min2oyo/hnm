import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let url = `http://localhost:3001/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  return (
    <div>
      <Row>
        {productList.map(item => (
          <Col lg={3}><ProductCard item={item} /></Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductAll;
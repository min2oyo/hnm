import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getProducts = async () => {
    let searchQuery = query.get(`q`) || ``;
    let url = `http://localhost:3001/products?q=${searchQuery}`;
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
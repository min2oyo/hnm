import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductsDetail = async () => {
    let url = `http://localhost:3001/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  return (
    <>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='product' />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
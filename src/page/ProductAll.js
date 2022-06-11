import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {

  const productList = useSelector(state => state.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getProducts = async () => {
    let searchQuery = query.get(`q`) || ``;
    dispatch(productAction.getProducts(searchQuery));
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
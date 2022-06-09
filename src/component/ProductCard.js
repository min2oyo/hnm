import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item?.img} alt='product' />
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
      <div>{item?.new ? `신제품` : ``}</div>
    </div>
  );
};

export default ProductCard;
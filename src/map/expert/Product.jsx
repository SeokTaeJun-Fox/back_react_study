import React from 'react';

const Product = ({name, price}) => {

  return (
    <li>
      {name} : {price}원
    </li>
  );
};

export default Product;
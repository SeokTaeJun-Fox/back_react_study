import React from 'react';

const FoodElement = ({onChange, index, kor, eng}) => {

  return (
    <li>
      <input 
        type="checkbox"
        onChange={onChange}
      />
      <span>{kor}({eng})</span>
    </li>
  );
};

export default FoodElement;
import React from 'react';

const Amount = ({props}) => {
  const {amountMemo, setAmount} = props;

  console.log("자식 랜더링");
  
  return (
    <div>
      <h1>수량: {amountMemo}개</h1>
      <button onClick={() => setAmount(amountMemo + 1)}>수량 증가!</button>
    </div>
  );
};

export default Amount;
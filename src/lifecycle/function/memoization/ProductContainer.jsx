import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {

  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1);
  console.log("부모 랜더링");

  //const addLike = () => setLike(like + 1);
  //like가 바뀔때 연산한다.
  const likeMemo = useMemo(() => {
    console.log("like 연산");
    return like;
  }, [like])

  //값 (역할은 같다)
  const amountMemo = useMemo(() => {
    console.log("amount 연산");
    return amount;
  }, [amount])

  //함수 (역할은 같다)
  const setAmountCallback = useCallback(() => {setAmount(amount + 1)}, [like])
  const props = {amountMemo, setAmountCallback};

  return (
    <div>
      <h1>좋아요 : {likeMemo}개</h1>
      <button onClick={setAmountCallback}>좋아요</button>
      <hr />
      <Amount props={props} />
    </div>
  );
};

export default ProductContainer;
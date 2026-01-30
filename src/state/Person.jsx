import React, { useState } from 'react';

// 컴포넌트는 대문자로 시작해야한다.
const Person = () => {

  // 난수는 임의로 최대 600사이의 값으로 설정한다
  // button을 룰러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린)

  const [result, setResult] = useState("");
  const [style, setStyle] = useState({});

  const handleOnClick = () => {
    let tmpNum = Math.floor(Math.random() * 600);
    let tmpResult = (tmpNum % 2) ? "홀수" : "짝수"
    let tmpStyle = (tmpNum % 2) ? {color : "pink"} : {color : "green"};
    setStyle(tmpStyle);
    setResult(tmpResult) 
  }

  return (
    <div>
      <p style={style}>{result}</p>
      <button onClick={handleOnClick}>랜덤 숫자 출력</button>
    </div>
  );
};

export default Person;
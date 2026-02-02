import React, { use, useRef, useState } from 'react';
import Color from '../../state/Color';

const Name = () => {
  // useRef(): DOM을 접근할 수 있게 제공해주는 훅함수
  // "님" 한 번 만 붙이기
  const inputRef = useRef();

  const [isAddNim, setIsAddNim] = useState(false);

  const handleButtonOnClick = (e) => {
    if(!isAddNim) {
      inputRef.current.value += "님";
      setIsAddNim(true);
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonOnClick}>+님</button>
    </div>
  );
};

export default Name;
import React, { useContext, useRef } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildInputComponent = () => {
  // Context값 사용
  // 폰트사이즈를 입력하고, 엔터를 누르면
  // 입력한 폰트 사이즈로 변경하기!
  
  const {state, actions} = useContext(FontSizeContext)
  
  const handleOnKeyUp = (e) => {
    if(e.key === "Enter")
    {
      const number = parseInt(e.target.value)
      if(number || number === 0)
      {
        actions.setFontSize(number + "px")
        e.target.value = "";
      }
    }
  }

  return (
    
    <div>
      <p style={{fontSize: state.fontSize}}>sss</p>
      <input type="text" placeholder="폰트 사이즈를 입력하세요" onKeyUp={handleOnKeyUp}/>
    </div>
  );
};

export default ChildInputComponent;
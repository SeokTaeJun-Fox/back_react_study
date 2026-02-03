import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {
  
  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  const {state, actions} = useContext(AnimalsContext);

  //1. input입력
  //2. useState에 동물배열추가
  //3. 동물 배열로 컴포넌트 만듦

  const handleOnKeyUp = (e) => {
    if(e.key === "Enter") {
      if(!e.target.value) {
        alert("동물이름이 없는것이 없습니다.");
        return;
      }
      
      actions.insert(e.target.value);
    } 
  }

  const list = state.animals.map((animal, i) => (
    <button key={i}>{animal}</button>
  ));

  return (
    <div>
      <input type="text" placeholder='동물을 입력하세요.' onKeyUp={handleOnKeyUp}/>
      {list}
    </div>
  );
};

export default Animals;
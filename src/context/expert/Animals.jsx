import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {
  
  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions;
  const {animals} = state;

  // 배열의 값을 순서대로 접근해서 버튼으로 바꾼다.
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  // 동물 버튼을 누르면, 그 버튼을 삭제하는 로직 완성!
  // context에 remove 메서드 구현!

  //1. onclick으로 인덱스 받기
  //2. 받은 인덱스 인자값 전달
  //3. remove메소드에서 전달받은 매개변수인덱스값으로 animals의 인덱스값 삭제 animals상태 변경
  const animalList = animals.map((animal, i) => (
    <button key={i} onClick={() => {remove(i)}}>{animal}</button>
  ))

  const handleOnClick = (index) => {
    remove(index);
  }

  // 넘겨줌 -> 받을준비
  return (
    <div>
      <input 
        type="text" placeholder='동물을 입력하세요.'
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            insert(e.target.value)
          }
        }}
      />
      {animalList}
    </div>
  );
};

export default Animals;
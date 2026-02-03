import React, { useState } from 'react';

const Count = () => {

  //let number = 0;
  
  //vd에 반영된 값(number)이다 하지만 view에는 반영이 안된다.
  //상태가 바뀌지 않으면 view는 수정되지않는다.
  //화면에 출력할 값이면 직접접근하지 말아라

  //훅함수 - use...
  //console.log(useState());  // [변수, Setter]
  // useState(초기값)
  // number로 바꿀수있는건 setNumber로 이용해서 바꾼다.
  const [number, setNumber] = useState(0);

  const derease = () => {
    //number--
    setNumber(number - 1);
    //console.log(number);
  }

  const increase = () => {
    //number++;
    setNumber(number + 1);
    //console.log(number);
  }

  return (
    <div>
      <button onClick={derease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;

// import React, { useState } from 'react';

// const Count = () => {
  
//   // 훅함수 - use...
//   // useState(초기값)
//   const [number, setNumber] = useState(0)

//   const decrease = () => {
//     setNumber(number - 1)
//   }

//   const increase = () => {
//     setNumber((prev) => {
//       console.log("이전 값", prev)
//       return number + 1
//     })
//   }

//   return (
//     <div>
//       <button onClick={decrease}>-1</button>
//       <h1>{number}</h1>
//       <button onClick={increase}>+1</button>
//     </div>
//   );
// };

// export default Count;
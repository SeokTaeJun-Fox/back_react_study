import React, { useState } from 'react';

const Sound = () => {

  // 강아지 버튼과 고양이 버튼을 만들고
  // 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

  const [sound, setSound] = useState("사운드 없음");
  const dogSound = () => {
    setSound("왈");
  }

  const catSound = () => {
    setSound("야옹");
  }

  const alienSound = () => {
    setSound("캮");
  }

  return (
    <div>
      <button onClick={dogSound}>강아지 버튼</button>
      <button onClick={catSound}>고양이 버튼</button>
      <button onClick={alienSound}>외계인 버튼</button>
      <p>{sound}</p>
    </div>
  );
};

export default Sound;
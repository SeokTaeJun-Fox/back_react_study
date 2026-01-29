import React, { useState } from 'react';

const Name = () => {

  // 사용자가 입력한 이름을 화면에 실시간으로 출력
  const [name, setName] = useState();
  //이벤트 함수는 handle + ...로 지어야하는 규칙이다.
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={handleNameChange} />
    </div>
  );
};

export default Name;
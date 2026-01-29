import React from 'react';
import PropsComponent01 from './PropsComponent01';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';
import PropsComponent04 from './PropsComponent04';

const Container = () => {

  // const name = "홍길동";
  // const printName = () => {
  //   console.log(name);
  // }

  // const color = "blue";

  //propscom03
  // const name = "URA";
  // const age = "24";
  // const size = "24px";
  // const hobby = "코딩";
  // const color = "#ff00ff";

  //자식에게 프로퍼티값으로 넘기는 말 props
  return (
    <div>
      {/* <PropsComponent01 name={name} printName = {printName}/>
      <PropsComponent02 color={color}/> */}

      {/* <PropsComponent03 name={name} age={age} fontSize={size} hobby={hobby} color={color} /> */}
      
      {/* 자식도 모두 props */}
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식요소🐖</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;
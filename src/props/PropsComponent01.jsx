import React from 'react';

//매개변수를 props(property)라고한다.
const PropsComponent01 = (props) => {
  //console.log("props", props);
  //props.printName();

  return (
    <div>
      <p>{props.name} 자식</p>
    </div>
  );
};

export default PropsComponent01;
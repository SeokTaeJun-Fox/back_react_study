import React from 'react';

const Sports = ({name, personnel}) => {
  return (
    <div>
      <li>{name} : {personnel}명</li>
    </div>
  );
};

export default Sports;
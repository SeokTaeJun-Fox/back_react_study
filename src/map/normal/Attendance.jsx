import React, { useState } from 'react';

const Attendance = ({name, isPresent}) => {
  
  const [isSelected, setIsSelected] = useState(false);
  const [color, setColor] = useState("black");

  const colorMap = {
    false : "black",
    true : "blue"
  }

  const handleOnClick = () => {
    const changeActive = !isSelected;
    setIsSelected(changeActive);
    setColor(colorMap[changeActive])
  }
  
  return (
    <li onClick={handleOnClick} style={{color}}>이름 : {name}({isPresent? "출석" : "결석"})</li>
  );
};

export default Attendance;
import React from 'react';

const Employee = ({name, income}) => {
  return (
    <div>
      <li style={{color: income >= 0 ? "blue" : "#d9d9d9"}}>{name}: {income.toLocaleString()}원</li>
    </div>
  );
};

export default Employee;
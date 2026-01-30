import React, { useState } from 'react';

const AttendanceMoney = ({money}) => {
  return (
    <p>총 : {money.toLocaleString()}원</p>
  );
};

export default AttendanceMoney;
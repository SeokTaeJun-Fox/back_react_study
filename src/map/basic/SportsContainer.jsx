import React from 'react';
import Sports from './Sports';

const SportsContainer = () => {
  
  const sportsList = [
    {
      name: "농구",
      personnel: 5,
    },
    {
      name: "축구",
      personnel: 11
    },
    {
      name: "야구",
      personnel: 9
    },
    {
      name: "배구",
      personnel: 6
    },
    {
      name: "탁구",
      personnel: 2
    }
  ]

  // 스포츠 경기 인원이 5명 이상인 스포츠만 화면에 출력
  // 컴포넌트를 분리하기
  // map은 react가 변경을 감지한다.
  const sports = sportsList.filter(({personnel}) => personnel >= 5).map(({name, personnel}, i) => (
    <Sports key={i} name={name} personnel={personnel} />
  ));
  
  
  return (
    <ul>
      {sports}
    </ul>
  );
};

export default SportsContainer;
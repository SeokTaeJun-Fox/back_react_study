import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Intro = () => {

  // query string을 가져오는 훅함수
  // console.log(useSearchParams());
  const [searchParams] = useSearchParams();
  
  const introduce = {
    developer: {
      name: "예스민균",
      salary: 3000,
      skills: ["html", "CSS", "JS", "React"]
    },

    police: {
      name: "약소훈",
      salary: 5000,
      skills: ["기침", "달리기", "태권도", "배드민턴"]
    },

    firefighter: {
      name: "김유대",
      salary: 2,
      skills: ["운전", "화재진압", "불뿜기", "물대포"]
    },

    default: {
      name: "이름없음",
      salary: "이름이없는데 급여가있나?",
      skills: []
    }
  }

  // 각각의 직업에 맞는 소개페이지를 구성하세요.
  // p태그 이름(name)
  // p태그 연봉(salary)
  // li태그 skills 출력
  const jobName = searchParams.get("job");
  const jobData = introduce[jobName];
  
  const yourName = jobData["name"];
  const salary = jobData["salary"];

  const list = jobData.skills.map((data, i) => (
    <li key={i}>{data}</li>
  ))
  
  return (
    <div>
      소개 페이지 <br />
      <p>이름 : {yourName}</p>
      <p>연봉 : {salary}</p>
      <ul>
        {list}
      </ul>
    </div>
  );
};

export default Intro;
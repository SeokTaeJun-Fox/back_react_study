// 저의 풀이
// import React, { useRef, useState } from 'react';

// const BankContainer = () => {
//   // 지폐: [50000, 10000, 5000, 1000, 500, 100, 50, 10]
//   // 최소 지폐 거슬러주기
//   // 사용자가 값을 입력하면 52100

//   const moneyTypes = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
//   const [money , setMoney] = useState(0);

//   const inputRef = useRef();
//   const pRef = useRef([]);

//     const tagMoneyTypes = moneyTypes.map((type, i) => (
//       <p key={i} ref={(el) => {pRef.current[i] = el}}></p>
//     ));

//   if(money || money === 0) {
//     let remainMoney = money;
//     const resultArray = moneyTypes.map((type, i) => {
//       const amount = parseInt(remainMoney/type);
//       remainMoney -= amount*type;

//       return `${type}: ${amount}개`;
//     });

//     pRef.current.forEach((data, i) => {
//       data.innerText = resultArray[i];
//     })
//   }

//   //풀이2 리턴문 p활용
//   // if(money || money === 0)
//   // {
//   //   let remainMoney = money;
//   //   const resultArray = moneyTypes.map((type, i) => {
//   //     const amount = parseInt(remainMoney/type);
//   //     remainMoney -= amount*type;

//   //     return `${type}: ${amount}개`;
//   //   });

//   //   pRef.current.forEach((data, i) => {
//   //     data.innerText = resultArray[i];
//   //   })
//   // }



//   const handleOnClick = () => {
//     setMoney(parseInt(inputRef.current.value));
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleOnClick}>동전 거스르기!</button>
//       {/* ex) */}
//       {/* <p ref={(el) => pRef.current[0] = el}>50000: 0개</p>
//       <p ref={(el) => pRef.current[1] = el}>10000: 0개</p>
//       <p ref={(el) => pRef.current[2] = el}>5000: 0개</p>
//       <p ref={(el) => pRef.current[3] = el}>1000: 0개</p>
//       <p ref={(el) => pRef.current[4] = el}>500: 0개</p>
//       <p ref={(el) => pRef.current[5] = el}>100: 0개</p>
//       <p ref={(el) => pRef.current[6] = el}>50: 0개</p>
//       <p ref={(el) => pRef.current[7] = el}>10: 0개</p> */}
//       {tagMoneyTypes}
//     </div>
//   );
// };

// export default BankContainer;

import React, { useRef, useState } from 'react';
import Bank from './Bank';

const BankContainer = () => {
  // 최소 지폐 거슬러주기
  // 사용자가 값을 입력하면 52100
  const [amount, setAmount] = useState("")
  const [change, setChange] = useState({})
  const pRef = useRef([])

  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  const billsList = bills.map((bill, i) => (
    <Bank key={i} pRef={pRef} bill={bill} change={change} i={i} />
  ))

  const handleAmonutOnChange = (e) => {
    setAmount(e.target.value)
  }

  const handleChangeOnClick = (e) => {
    if(typeof(Number(amount)) !== "number"){
      return alert("정수만 입력하세요.")
    }
    
    const result = {}
    let money = amount;
    for(let bill of bills){
      result[bill] = Math.floor(money / bill)
      money = amount % bill
    }
    setChange(result)
  }

  return (
    <div>
      <input 
        type="text" onChange={handleAmonutOnChange} 
        placeholder='거스름돈 입력: ex)1520'
      />
      <button onClick={handleChangeOnClick}>동전 거스르기!</button>
      {/* ex) */}
      {billsList}
    </div>
  );
};

export default BankContainer;
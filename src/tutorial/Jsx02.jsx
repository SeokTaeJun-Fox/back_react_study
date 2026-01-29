//export 뜻
//default 뜻 (2개 이상일 수 없다. 이 파일의 대표)
export default function Jsx02() {
  //변수 선언은 반드시 함수 내부에서 선언해야 한다.
  const name = "홍길동";
  const age = 20;
  return (
    // 리액트 프래그먼트 1개의 dom 트리를 만들기위해 <div>대신 <>로 써도 된다.
    //이 부분은 <></>내부 (태그 내부이므로) 변수 사용하려면 중괄호로 감싸야한다.
    <>
      <p>이름 : {name}</p>  
      <p>나이 : {age}</p>
    </>
  );
}

//export default Jsx02; //파일 내보내기 - 이 파일에서 Jsx01을 가져가라
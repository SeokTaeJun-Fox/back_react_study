import './App.css';
import Jsx01 from './tutorial/Jsx01'; //해당 파일에 Jsx01을 가져온다.
import FoodContainer from './ref/expert/FoodContainer';

//App()은 컴포넌트
//컴포넌트의 모임은 App()이다.
//jsx 문법 (js + xml (xml은 태그 확장))
function App() {
  return (
    //<div></div> 돔트리를 하나로 만들어야 한다.
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //xml은 반드시 닫는 태그

    //자바스크립트로부터 태그를 객체라부름
    <>
      <FoodContainer />
    </>
  );
}

export default App;

import React, { Component } from 'react';

class LifeCycleComponent extends Component {
 
 // 자식 필드
 state = {
  number: 0,
  color: null,
 }

 handleNumberOnClick = () => {
  this.setState({
    number: this.state.number + 1
  })
 }

 // ref
 colorRef = null;

 constructor(props) {
  super(props)
  //console.log(props);
 }

 //V.D의 메소드 (실행하지않으면 랜더링 되지 않는다.)
 //V.D는 가장 먼저 올라가야,실행되야 (prevState, nextProps를 받을수있다.)
 static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);
    if(nextProps.color !== prevState.color) {
      return {
        color : nextProps.color
      }
    }

    return null;
 }

 componentDidMount() {
  console.log("componentDidMount");
 }

 //랜더링을 하는 조건 확인 true로 반환하면 업데이트된다.
 shouldComponentUpdate(nextProps, nextState) {
  console.log("shouldComponentUpdate", nextProps, nextState);
  return nextState.number % 5 !== 0;
 }

 //업데이트 직전 데이터를 받는다.
 getSnapshotBeforeUpdate(prevProps, prevState) {
  if(prevProps.color !== this.props.color){
    return this.colorRef.style.backgroundColor;
  }
  return null;
 }

 //getSnapshotBeforeUpdate와 세트로 해야한다.
 componentDidUpdate(prevProps, prevState, snapshot) {
  if(prevState){
    console.log(prevState);
  }

  if(prevProps){
    console.log(snapshot);
  }
 }
 
  render() {
    return (
      <div>
        <div
        ref={(el) => this.colorRef = el}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: this.state.color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000000"
        }}>
          {/* 자식의 상태값 */}
          {this.state.number}
        </div>
        <button onClick={this.handleNumberOnClick}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;
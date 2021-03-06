/*eslint-disable*/

import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','신림역 감성카페']);
  let [따봉, 따봉변경 ] = useState(0);
  let [ 모달, 모달변경 ] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 제목변경(){
      var newArray = [...글제목];
      if (newArray[0]=='남자 코트 추천'){
          newArray[0] = '여자 코트 추천';
      }else if (newArray[1]=='남자 코트 추천'){
        newArray[1] = '여자 코트 추천';
      }else if (newArray[2]=='남자 코트 추천') {
        newArray[2] = '여자 코트 추천';
      }
      글제목변경( newArray );
      }

    function 모달클릭(){
      모달 == true ? false : true;
      모달변경( false )
    }

  function 초기화(){
    var newArray = [...글제목];
    
    글제목변경( newArray )
  }

  function 글순서변경 (){
    var newArray = [...글제목];
    newArray.sort((a,b)=> a.localeCompare(b)  );
    글제목변경( newArray );
  }

  function 글순서역순변경 (){
    var newArray = [...글제목];
    newArray.sort((a,b)=> -a.localeCompare(b)  );
    글제목변경( newArray );
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div> 
      </div>
      <button onClick={ 제목변경 }>글수정 </button>
      <button onClick={ 초기화 }>초기화 </button>
      <button onClick={ 글순서변경 }>제목가나다순 정렬 </button>
      <button onClick={ 글순서역순변경 }>제목오름차순 정렬 </button>

      {
        글제목.map(function(글, i){
          return (
          <div onClick={()=>{ 누른제목변경(i); 모달변경(!모달); } } className="list" key={i}>
            <h3>{ 글 }<span onClick={()=>{따봉변경( 따봉 + 1) } } >👍</span> { 따봉 }</h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>   
          )
        })
      }

    <div>
        <input onChange={ (e)=>{ console.log(e.target.value) } } />
    </div>

      { 
         모달 === true 
         ? <Modal 글제목={글제목} 누른제목={누른제목}/>
         : null
      }
    </div>


  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>{ props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;

// 목적 : 유저가 이름을 제출하면 1. 해당 loginForm 이 보이지 않게 하고 2. 제출된 유저 이름이 담긴 h1을 보여주고 싶음 


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //css selector를 사용하여 greeting 이라는 id를 가지고 있는 요소를 가져옴

const HIDDEN_CLASSNAME = "hidden"; //css의 hidden class.

/** 유저가 이름을 입력하면 1. 해당 Form 이 사라지게 하고 2. h1을 나타나게 하는 함수 */
function onLoginSubmit(event) {                 //버튼 눌렀을 때 일어나는 submit 이벤트에 대한 정보를 event 인자에 넣어줌.
                                             //1.
   event.preventDefault();                      //submit 이벤트가 일어나면 새로고침 되므로 이를 방지함. (preventDefault(): 기본 동작 방지)
   const username = loginInput.value;           //username 변수에 loginInput.value 를 부여.
   loginForm.classList.add(HIDDEN_CLASSNAME);   //css의 hidden class를 loginForm에 부여함.
                                             //2.
   console.log(username);                       
   greeting.innerText = "hello " + username;     //<h1>이 담긴 변수  greeting 에 username 추가
   greeting.innerText = `Hello ${username}`     //<h1>이 담긴 변수  greeting 에 username 추가

   greeting.classList.remove(HIDDEN_CLASSNAME);  //greeting에 class 가 hidden 이라 안보이므로 hidden 클래스 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);
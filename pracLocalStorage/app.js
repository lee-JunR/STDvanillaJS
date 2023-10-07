
// 목적 : 유저가 이름을 제출하면 1. submit 이 제출되어 새로고침되어도 username이 localStorage에 저장되어 있었으면 좋겠음
//       localStorage.setItem() 함수를 이용해서 저장, localStorage.getItem() 으로 불러오기 가능, localStorage.remove() 로 제거 가능


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //css selector를 사용하여 greeting 이라는 id를 가지고 있는 요소를 가져옴

const HIDDEN_CLASSNAME = "hidden"; //css의 hidden class.
const USERNAME_KEY = "username"

/** 인수를 넣으면 h1 id = greeting 을 보이게 하고 이름을 출력하는 함수. */
function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME); //show the greetings
}


/** 유저가 이름을 입력하면 1. 해당 Form 이 사라지게 하고 2. h1을 나타나게 하는 함수 */
function onLoginSubmit(event) {                 //버튼 눌렀을 때 일어나는 submit 이벤트에 대한 정보를 event 인자에 넣어줌.
                                             
   event.preventDefault();                      
   const username = loginInput.value;           
   loginForm.classList.add(HIDDEN_CLASSNAME);   
   localStorage.setItem(USERNAME_KEY, username)   // key : username 로 localStorage에 저장
   paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME); // show the form
   loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreetings(savedUsername);//show the greetings
}
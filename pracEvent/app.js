const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

/** submit Event 확인을 위한 함수 */
function onLoginSubmit(event) {  //버튼 눌렀을 때 일어나는 submit 이벤트에 대한 정보를 event 인자에 넣어줌.
   event.preventDefault();       //submit 이벤트가 일어나면 새로고침 되므로 이를 방지함. (preventDefault(): 기본 동작 방지)
   console.log(event);           //이벤트에 대한 정보를 콘솔로그에 띄움
   console.log(loginInput.value);//새로고침이 일어나지 않아 loginInput value 를 콘솔에서 볼 수 있음
}

/** pointer Event 확인을 위한 함수 */
function onLinkClick(event){  //링크를 누르면 pointer 이벤트에 대한 정보를 event 인자에 넣어줌
   event.preventDefault();
   console.log(event);        //pointer event 에는 이벤트 시각, x 좌표 y 좌표 등의 정보가 들어가 있음.
   alert("clicked!");
}
loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", onLinkClick);
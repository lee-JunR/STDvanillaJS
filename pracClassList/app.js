const h1 = document.querySelector("div.hello:first-child h1");

/** 클릭시 h1을 다른 색으로 바꾸는 함수*/
function handleTitleClick() {
    const activeClass = "active"
    if(h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass);
    }else{
        h1.classList.add(activeClass);
    }
}
// 두 함수는 같은 기능.
function handleTitleClick() {
    h1.classList.toggle("active")
}


h1.addEventListener("click",handleTitleClick);

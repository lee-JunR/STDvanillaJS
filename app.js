const title = document.querySelector("div.hello:first-child h1");

/** 클릭시 title을 파란색으로 한번 바꿔주는 함수 */
function handleTitleClick() {
    title.style.color = "blue";
}
/** 마우스가 h1 title 에 있다면 title을 변경하는 함수 */
function handleMouseEnter(){
    title.innerText = "Mouse is here";
}
/** 마우스가 h1 title 에서 떠나면 title을 변경하는 함수 */
function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copier")
}
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
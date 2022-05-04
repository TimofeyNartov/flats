let callMe=document.getElementsByClassName("callMe")[1]
let modal=document.getElementsByClassName("modal")[0]
function callRequest(){
    modal.style.transform="translateY(0%)"
}
modal.onclick=function (){
    modal.style.transform="translateY(-100%)"
}
modal.children[0].onclick=function(event){
    event.stopPropagation();
}
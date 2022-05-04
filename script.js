let sliderNext=document.getElementById("sliderNext")
let slider=document.getElementById("slider")
let sliderBack=document.getElementById("sliderBack")
let distance=0;
let bibika=0;
let commentNext=document.getElementById("commentNext")
let commentBack=document.getElementById("commentBack")
sliderNext.onclick=function(){
    bibika=bibika+1
    distance=distance+100
    console.log(bibika);
    if (distance==slider.children.length*100) {
        distance=0
    }
    slider.style.transform="translateX(-"+distance+"%)"
}
sliderBack.onclick=function(){
    distance=distance-100
    console.log(distance)
    if (distance==-100){
        distance=(slider.children.length-1)*100
    }
    slider.style.transform="translateX(-"+distance+"%)"
}
commentNext.onclick=function(){
    console.log("biboba");
    let activePair=document.getElementsByClassName("activePair")[0];
    let nextPair;
    if (activePair.nextElementSibling){
        nextPair=activePair.nextElementSibling
    }
    else{
        nextPair=document.getElementsByClassName("firstPair")[0];
    }
    console.log(activePair,nextPair);
    activePair.classList.remove("activePair")
    setTimeout(function (){
    nextPair.classList.add("activePair")
    },200)
}
commentBack.onclick=function(){
    console.log("biboba");
    let activePair=document.getElementsByClassName("activePair")[0];
    let prevPair;
    if (activePair.previousElementSibling) {
        prevPair=activePair.previousElementSibling
    }
    else{
        prevPair=document.getElementsByClassName("lastPair")[0];
    }
    console.log(activePair,prevPair);
    activePair.classList.remove("activePair")
    setTimeout(function () {
    prevPair.classList.add("activePair")
    },200)
}

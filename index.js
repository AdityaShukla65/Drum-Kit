const special=document.querySelector(".special")
const lst=["w","a","s","d","j","k","l"]
const soundMap={
    w:"crash.mp3",
    a:"kick-bass.mp3",
    s:"snare.mp3",
    d:"tom-1.mp3",
    j:"tom-2.mp3",
    k:"tom-3.mp3",
    l:"tom-4.mp3"
}

function animation(key){
    const elm=document.getElementById(key).classList
    elm.add("pressed")

    setTimeout(() => {
        elm.remove("pressed")
    }, 100);
}

function playSound(key){
    new Audio(soundMap[key].toLowerCase()).play()
}

for(let i=0;i<lst.length;i++){
    document.getElementById(lst[i]).addEventListener("click",function(){
        playSound(lst[i])
        animation(lst[i])
    })
}

document.addEventListener("keydown",e=>{
    playSound(e.key)
    animation(e.key)
})

special.addEventListener("click",function(){
    let index=0
    setInterval(()=>{
        playSound(lst[index])
        index=(index+1)%lst.length
    },1000)
})

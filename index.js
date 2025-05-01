const lst=["w","a","s","d","j","k","l"]
const soundMap={
    w:"/Drum-Kit/Drum Kit Starting Files/sounds/crash.mp3",
    a:"/Drum-Kit/Drum Kit Starting Files/sounds/kick-bass.mp3",
    s:"/Drum-Kit/Drum Kit Starting Files/sounds/snare.mp3",
    d:"/Drum-Kit/Drum Kit Starting Files/sounds/tom-1.mp3",
    j:"/Drum-Kit/Drum Kit Starting Files/sounds/tom-2.mp3",
    k:"/Drum-Kit/Drum Kit Starting Files/sounds/tom-3.mp3",
    l:"/Drum-Kit/Drum Kit Starting Files/sounds/tom-4.mp3"
}

function playSound(key){
    new Audio(soundMap[key].toLowerCase()).play()
}

for(let i=0;i<lst.length;i++){
    document.getElementById(lst[i]).addEventListener("click",function(){
        playSound(lst[i])
    })
}

document.addEventListener("keydown",e=>{
    playSound(e.key)
})
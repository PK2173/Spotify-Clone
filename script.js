console.log("welcome To spotify");
let audioEliment = new Audio('songs/1.mp3');
let somngIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif')
let myPraogressBar = document.getElementById("myProgressBar")
let songItem = Array.from(document.getElementsByClassName('songItem'));

// audio.play()
let songs = [
    {
        songName : "Slame-e-Isk",
        filePath : "songs/1.mp3",
        coverPath : "covers/1.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/2.mp3",
        coverPath : "covers/2.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/3.mp3",
        coverPath : "covers/3.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/4.mp3",
        coverPath : "covers/4.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/5.mp3",
        coverPath : "covers/5.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/6.mp3",
        coverPath : "covers/6.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/7.mp3",
        coverPath : "covers/7.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/8.mp3",
        coverPath : "covers/8.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/9.mp3",
        coverPath : "covers/9.jpg"
    },{
        songName : "Slame-e-Isk",
        filePath : "songs/10.mp3",
        coverPath : "covers/10.jpg"
    }
]


songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

// Handel play/puse click

masterPlay.addEventListener(('click'), ()=>{
    if (audioEliment.paused || audioEliment.currentTime <= 0 ){
        audioEliment.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1
        document.getElementsByClassName('songitemPlay')[somngIndex].classList.remove('fa-circle-play');
        document.getElementsByClassName('songitemPlay')[somngIndex].classList.add('fa-pause');
    }
    else{
        audioEliment.pause()
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0
        makeAllPlays()
    }
})

// Listen to event 
audioEliment.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioEliment.currentTime/audioEliment.duration) * 100);
    // updateSeakBar
    myPraogressBar.value = progress
})

myPraogressBar.addEventListener("change", ()=>{
    audioEliment.currentTime = (myPraogressBar.value * audioEliment.duration)/ 100;
})

let makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element,i)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-pause')
        audioEliment.pause()
    })
} 


Array.from(document.getElementsByClassName('songitemPlay')).forEach((element,i)=>{
    element.addEventListener('click', ()=>{
        if(audioEliment.paused || audioEliment.currentTime <= 0 ){
            makeAllPlays();
            element.classList.remove('fa-circle-play')
            element.classList.add('fa-pause')
            somngIndex = i
            audioEliment = new Audio(`songs/${i}.mp3`);
            audioEliment.currentTime = 0
            if (audioEliment.paused || audioEliment.currentTime <= 0 ){
                audioEliment.play()
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-pause');
                gif.style.opacity = 1
            }
            else{
                audioEliment.pause()
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity = 0
            }
            audioEliment.play()
        }else{
            makeAllPlays();
            audioEliment.paused
            audioEliment.pause()
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0
        }
    })
})


document.getElementById('previos').addEventListener('click',()=>{
    if(somngIndex > 0){
    somngIndex = somngIndex -1 
    makeAllPlays();
    audioEliment.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1
    document.getElementsByClassName('songitemPlay')[somngIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songitemPlay')[somngIndex].classList.add('fa-pause');
    audioEliment.pause()
    audioEliment = new Audio(`songs/${somngIndex}.mp3`);
    audioEliment.play()
    }
})

document.getElementById('next').addEventListener('click',()=>{
    if(somngIndex < 9){
    somngIndex = somngIndex +1 
    makeAllPlays();
    audioEliment.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1
    document.getElementsByClassName('songitemPlay')[somngIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songitemPlay')[somngIndex].classList.add('fa-pause');
    audioEliment.pause()
    audioEliment = new Audio(`songs/${somngIndex}.mp3`);
    audioEliment.play()
    }
})
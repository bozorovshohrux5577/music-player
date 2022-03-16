
let list = [
    "file:///C:/Users/Win/Music/xamdam-sobirov-kapalagim_(uzhits.net).mp3",
    "file:///C:/Users/Win/Music/%D0%A0%D1%83%D1%81%D0%BB%D0%B0%D0%BD%20%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20&%20Tural%20Everest%20-%20%D0%92%D0%BE%D0%BB%D0%BA%D0%B8%20(megapesni.com).mp3",
    "file:///C:/Users/Win/Music/Gulinur%20-%20Jo'ji%20qoro.mp3",
    "file:///C:/Users/Win/Music/munisa_rizayeva_-_begu_joniman_tojikcha_(uzhits.net).mp3",
    "file:///C:/Users/Win/Music/munisa_rizayeva_-_ketgin_yiroqlarga_(uzhits.net).mp3",
    "file:///C:/Users/Win/Music/Munisa_Rizayeva_-_Kuch_ber.mp3",
    "file:///C:/Users/Win/Music/Munisa_Rizayeva_-_Yomona_yomon_(uzhits.net).mp3",
    "file:///C:/Users/Win/Music/join_%20_denov_muz_tojik_music_21.mp3",
    "file:///C:/Users/Win/Music/muzapporangespace_Ganvest_-_Birkin_72984981.mp3",
    "file:///C:/Users/Win/Music/muzapporangespace_Gazan_-_SUETOLOG_72916881.mp3",
    "file:///C:/Users/Win/Music/osmon-navruzov-bagla-qani.mp3",
    "file:///C:/Users/Win/Music/shoxruz_abadiya_yig_laysanmi_15.mp3"
]

let currentAudio = 0;
let audio = new Audio(list[0]);
let h2 = document.querySelector(".title");

function getName(){
    let sound = list[currentAudio];
    let split = sound.split("/");
  h2.innerHTML=  split[split.length-1];
}

function playSound () {
    audio.play();
    document.querySelector("#play").style.display = "none";
    document.querySelector("#pause").style.display = "block";
    getName();
    document.querySelector(".imgBox").style.display = "block"


    document.querySelector(".imgBox").style.animation = ""
}
function pauseSound () {
    audio.pause();
    document.querySelector("#play").style.display = "block";
    document.querySelector("#pause").style.display = "none";
    document.querySelector(".imgBox").style.animation = "block"

}
function nextSound(){
   currentAudio++;
   document.querySelector("#play").style.display = "none";
   document.querySelector("#pause").style.display = "block";
   document.querySelector(".imgBox").style.display = "block";
   document.querySelector(".imgBox").style.animation = ""
   if(list[currentAudio] !== undefined){
       audio.pause();
       audio = new Audio(list[currentAudio]);
       audio.play();
      getName();
      
   }
}
function backSound(){
    currentAudio--;
    document.querySelector("#play").style.display = "none";
    document.querySelector("#pause").style.display = "block";
   document.querySelector(".imgBox").style.display = "block";
   document.querySelector(".imgBox").style.animation = ""

    
    if(list[currentAudio] !== undefined){
        audio.pause();
       audio = new Audio(list[currentAudio]);
       audio.play();
    getName();
    }
}
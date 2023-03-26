let pianoKeys=document.querySelector(".piano-keys");
// let audioEl=document.querySelector("audio");
let audioEl=document.createElement("audio");

pianoKeys.addEventListener("click",(e)=>{
    console.log(e.target.dataset.id);
    if(e.target.dataset){
        audioEl.src=`file:///C:/Users/GAUTAM/Desktop/Coding/Website%20Clones/Javascript%20Projects/Piano/sound/key${e.target.dataset.id}.mp3`;
        audioEl.play();
    }
})


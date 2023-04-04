var m = document.querySelectorAll(".drum").length;

//detecting buttonpress:
for(var i=0;i<m;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // console.log(this.innerHtml);
      var thebutton= this.innerHTML;
      makeSound(thebutton);
       
     makeanimation(thebutton);
    });
}

//detecting key board press:
 document.addEventListener("keypress",function(event){
       makeSound(event.key);
       makeanimation(event.key);

 })


// funtion the work according to key and button : 
function makeSound(key){
    switch (key) {
        case "w":
            var sound= new Audio("tom-1.mp3");
            sound.play();
            break;
       case"a":
       var sound= new Audio("tom-2.mp3");
       sound.play();
       break;

        case"s":
        var sound= new Audio("tom-3.mp3");
        sound.play();
        break;

        case "d":
            var sound= new Audio("tom-4.mp3");
            sound.play();
            break;
        case"j":
        var sound= new Audio("snare.mp3");
        sound.play();
        break;

        case"k":
        var sound= new Audio("crash.mp3");
        sound.play();
        break;

        case"l":
        var sound= new Audio("kick-bass.mp3");
        sound.play();
        break;

        default:
            console.log("the default");
            break;
       }

}
  
function makeanimation(currentKey){
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function()
        {
        activeButton.classList.remove("pressed")
    }
    ,100);
    

}


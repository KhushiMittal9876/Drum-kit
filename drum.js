//detecting button press
var numberOfDrumButtons= document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); // passing the function as an inut so that it will work only when event is performed,// here handleclick is a funnction and we dont put() in front of handleclick here asa now this function will be called when event(click) will occur but if we put handleclick() then this is a straight up method call and it will call as soon as website load and we dont want this.
}


function handleClick(){
   var buttonInnerHTML =this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
       
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:console.log(key);
       }
}

function buttonAnimation(currentKey){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed"); 

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
}
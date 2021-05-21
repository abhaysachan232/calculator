let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    buttonText = e.target.innerText;
    console.log('Button text is', buttonText);
    if(buttonText=='X'){
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    


}
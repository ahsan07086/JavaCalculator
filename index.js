//Calculator programme

const display=document.getElementById("display");

function appendToDisplay(str){
    display.value+=str;
}
function cleardisplay(){
   display.value="";
}
function calculate(){
    try{
      display.value=eval(display.value);      //eval() is a function in javascript that is used to work as a built in calculator
    }
    catch(error)
    {
        display.value="Error";
    }
}

document.title="My Calculator";
//document.body.style.backgroundColor="hsl(0,0%,15%)";   //We can directly access and manipulate html element using document object by javascript.
let str="Calculator";
document.getElementById("MyCalc").textContent+= str === "" ? "false" : ` ${str}`;
document.getElementById("MyCalc").style.textAlign="center";
document.getElementById("MyCalc").style.fontSize="50px";
console.dir(document);

var input = document.getElementById('area');
var number = document.getElementsByClassName('number');

function pushBtn(output){
    "use strict";
    var pushed = output.innerHTML;
    if(pushed == "="){
        input.innerHTML = eval(input.innerHTML);
    }
    else if(pushed == "C"){
        input.innerHTML = "";
    }
    else if(input.innerHTML == "0"){
        input.innerHTML = pushed;
    }
    else{
        if(input.innerHTML == "undefined"){
            input.innerHTML == pushed;
        }
        else{
        input.innerHTML+=pushed;
        }
    }
}
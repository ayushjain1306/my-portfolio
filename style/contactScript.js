let copy = document.getElementsByClassName("copyright")[0];
const curr = new Date().getFullYear();
const copyrightSymbol = '\u00A9';

copy.textContent = `${copyrightSymbol} ${curr} Ayush Jain. All rights reserved.`;

let button = document.getElementById("button");


function checkPhone() {
    let phone = document.getElementById("phone").value.toString();
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    
    if (phone.length != 10){
        error2.textContent = "! Mobile Number must be of 10 digits."
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.backgroundColor = "grey";
    }
    else{
        error2.textContent = "";
        if (error1.textContent === "") {
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").style.backgroundColor = "rgb(0,0,33)";
        }
    }
}

function checkName() {
    let name = document.getElementById("name").value.toString();
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");

    for (let i = 0; i < name.length; i++) {
        const element = name.charAt(i);

        if ((element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z') || element == ' '){
            error1.textContent = "";
            if (error2.textContent !== "") {
                continue;
            }
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").style.backgroundColor = "rgb(0,0,33)";
        }
        else{
            error1.textContent = "! Name cannot contain characters other than alphabets";
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.backgroundColor = "grey";
            break;
        }
    }
}
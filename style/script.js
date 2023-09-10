function moreLess() {
    let button= document.getElementsByClassName("button")[0];
    let dot = document.getElementsByClassName("dot")[0];
    let content = document.getElementsByClassName("content")[0];

    if (content.style.display === "none"){
        dot.style.display = "none";
        content.style.display = "inline";
        button.innerHTML = "Read Less";
    }
    else {
        dot.style.display = "inline";
        content.style.display = "none";
        button.innerHTML = "Read More";
    }
}

let copy = document.getElementsByClassName("copyright")[0];
const curr = new Date().getFullYear();
const copyrightSymbol = '\u00A9';

copy.textContent = `${copyrightSymbol} ${curr} Ayush Jain. All rights reserved.`;

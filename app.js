var btnTranslate = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "SAhithi";

btnTranslate.addEventListener("click", function clickHandler() {
    console.log("Clicked");
    outputDiv.innerText = "Howdy";
})
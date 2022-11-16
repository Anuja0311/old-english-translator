var btnTranslate=document.querySelector('#btn-translate');
var txtInput=document.querySelector('#txt-input');
var outputDiv=document.querySelector('#output');

var url="https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationUrl(text){
    return url+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("SOWETHING WENT WRONG");

}

function clickHandler(){
    var inputTxt=txtInput.value;

    fetch(getTranslationUrl(inputTxt))
    .then(response=>response.json())
    .then(json=>outputDiv.innerHTML=json.contents.translated)
    .catch(errorHandler);
}
btnTranslate.addEventListener('click',clickHandler);

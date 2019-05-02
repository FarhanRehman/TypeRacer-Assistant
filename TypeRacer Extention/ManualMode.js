var timeRemaining = document.getElementsByClassName("timeDisplay")[0].querySelectorAll("span")[0].innerHTML;
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);

}
var firstWord = document.getElementsByClassName("inputPanel")[0].querySelectorAll("span")[0].innerHTML + document.getElementsByClassName("inputPanel")[0].querySelectorAll("span")[1].innerHTML
var restOfText = document.getElementsByClassName("inputPanel")[0].querySelectorAll("span")[2].innerHTML
var fullText = firstWord.concat(restOfText)

function triggerKeyboardEvent(el, keyCode, type)
{
    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");

    if(eventObj.initEvent){
      eventObj.initEvent(type, true, true);
    }

    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;

    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);

}

function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}

$=$$

content = $('table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div')[3].textContent.split('');
i = 0;


function a () {

	input = $('table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input')[0]
	input.focus()
	input.value += fullText[i++];
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keydown")
	input.click()
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keypress")
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keyup")


  timeRemaining = timeRemaining.toString()
  timeRemaining = timeRemaining.replaceAt(1,'.');
  timeRemaining = Number(timeRemaining)



  var words = fullText.split(' ').length

  var asd = words/timeRemaining
  console.log(input.value)
  setTimeout(a, 100)
};
a();

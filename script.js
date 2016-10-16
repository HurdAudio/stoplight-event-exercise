'use strict';
/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

var redLight = false;
var yellowLight = false;
var greenLight = false;
var clicks = 0;

function turnLightOff (lightTriggered) {
  var bulbHandle;

  switch (lightTriggered) {
    case ('Stop'):
      bulbHandle = document.querySelector('#stopLight');
      redLight = false;
      break;
    case ('Slow'):
      bulbHandle = document.querySelector('#slowLight');
      yellowLight = false;
      break;
    case ('Go'):
      bulbHandle = document.querySelector('#goLight');
      greenLight = false;
      break;
    default:
      console.log('bad turnLightOff function');
      break;
  }
  bulbHandle.style.backgroundColor = '#111';
}

function turnLightOn (lightTriggered) {
  var bulbHandle;
  var colour = '';

  switch (lightTriggered) {
    case ('Stop'):
      bulbHandle = document.querySelector('#stopLight');
      redLight = true;
      colour = 'red';

      break;
    case ('Slow'):
      bulbHandle = document.querySelector('#slowLight');
      yellowLight = true;
      colour = 'yellow';

      break;
    case ('Go'):
      bulbHandle = document.querySelector('#goLight');
      greenLight = true;
      colour = 'green';

      break;
    default:
      //console.log('This is not supposed to happen');
      break;
  }
  bulbHandle.style.backgroundColor = colour;

}

document.querySelector('#stopButton').addEventListener("mouseenter", function() {

    console.log('Entered Stop Button');

});

document.querySelector('#stopButton').addEventListener("mouseleave", function () {

  console.log('Exit Stop Button');
});

document.querySelector('#slowButton').addEventListener("mouseenter", function(  ) {

    console.log('Entered Slow Button');

});

document.querySelector('#slowButton').addEventListener("mouseleave", function () {

  console.log('Exit Slow Button');
});

document.querySelector('#goButton').addEventListener("mouseenter", function( event ) {

    console.log('Entered Go Button');

});

document.querySelector('#goButton').addEventListener("mouseleave", function (event) {

  console.log('Exit Go Button');
});

document.querySelector('#controls').addEventListener("click", function (event) {
  event.stopPropagation();
  ++clicks;
  var buttonPushed = event.target;

  if (clicks % 2) {
    console.log('User has clicked the ' + buttonPushed.id + ' button.');
    switch (buttonPushed.id) {
      case ('stopButton'):
        if (redLight) {
          turnLightOff('Stop');
        } else {
          turnLightOn('Stop');
          turnLightOff('Slow');
          turnLightOff('Go');
        }
        break;
      case ('slowButton'):
        if (yellowLight) {
          turnLightOff('Slow');
        } else {
          turnLightOn('Slow');
          turnLightOff('Stop');
          turnLightOff('Go');
        }
        break;
      case ('goButton'):
        if (greenLight) {
          turnLightOff('Go');
        } else {
          turnLightOn('Go');
          turnLightOff('Stop');
          turnLightOff('Slow');
        }
        break;
      default:
        break;
    }
  }





});

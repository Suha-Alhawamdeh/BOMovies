'use strict';

document.write('<h1>' + 'Welcome in our website' + '</h1>');

var txt ;

function confirmfunc() {
  if (confirm ('Did you enjoy our site?!')) {
    txt = 'Thank you, we are glad.';
    alert(txt);
    document.write(txt);
  } else {
    txt = 'Unfortunatly, we looking forward to intertnment you next time';
  }
}


confirmfunc();

function createGreeting(){
  var hourNow = prompt('what time is now?');
  var greeting;
  if (hourNow > 18 ) {
    greeting = 'Good evening, Class!';}
  else if (hourNow > 12 ) {
    greeting = 'Good afternoon, Class!';}
  else if (hourNow >= 0 ) {
    greeting = 'Good morning!';
    greeting = 'Welcome!';}
  return greeting;
}

document.write('<h1>' + greeting + '</h1>');
document.write('<h1>' + txt + '</h1>');
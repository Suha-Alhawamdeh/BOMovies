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
    document.write('<h1>' + txt + '</h1>');
  }
}


confirmfunc();
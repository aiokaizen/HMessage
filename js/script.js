/*
 *
 * Author: Mouad Kommir
 *
 */

function pressGenButton(e) {
  if(e.keyCode==13)
    document.getElementById('buttonGenerate').click();
}

function generate() {
  var string;
  var message = document.getElementById("message");
  var txt1 = document.getElementById("txtMsg1");
  var txt2 = document.getElementById("txtMsg2");
  var txt3 = document.getElementById("txtMsg3");
  var txt4 = document.getElementById("txtMsg4");

  if(txt1.value == '') {
      txt1.className = 'error';
  }
  else {
      txt1.className = '';
      string = txt1.value;
      string += generateChars();
      string += txt2.value;
      string += generateChars();
      string += txt3.value;
      string += generateChars();
      string += txt4.value;
      string += generateChars();

      message.innerHTML = string;
  }
}

function generateChars() {
  var string = '';
  for(var i = 0; i < 570; i++) {
      if(i % 2 == 0) {
          string += '&lrm;';
      }
      else {
          string += '&rlm;';
      }
  }
  return string;
}


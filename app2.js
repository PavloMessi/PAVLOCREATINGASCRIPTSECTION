// example4


var boxOne4 = document.getElementsByClassName('box4')[0];
var running4 = false;

var toggleTransition4 = function() {
  if(!running4) 
  { 
    boxOne4.classList.add('horizTranslate4');
  } else {
    boxOne4.classList.remove('horizTranslate4'); 
  }  

  running4 = !running4;
}

// example3

var boxOne3 = document.getElementsByClassName('box3')[0];
var running3 = false;

var toggleTransition3 = function() {
  if(!running3) 
  { 
    boxOne3.classList.add('horizTranslate3');
  } else {
    boxOne3.classList.remove('horizTranslate3'); 
  }  

  running3 = !running3;
}
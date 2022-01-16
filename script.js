var button = $('button');
var title = $('h1');
var background = $('body');

button.on('click', colorMode);

function colorMode(){
  
  title.toggleClass('title');
  background.toggleClass('background');
  button.toggleClass('button');
}
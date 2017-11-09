/*document.getElementById('button-click').addEventListener('click',function(){
/*  document.querySelector('DIV').classList.add('existir')*/
  /*  document.querySelector('DIV').classList.remove('existir') */
    /*document.querySelector('DIV').classList.togle('existir')  si tiene le quita, si no tiene le pone  */
    /*document.querySelector('DIV').classList.constains('existir')  si tiene le quita, si no tiene le pone  */

/*}) */

document.getElementById('input-sensible').addEventListener('keyup',
function(e) {
  var ascii = e.keyCode;
  var divColor=document.querySelector('div');
  if(ascii == 65) {
    divColor.classList.add('yellow')
    divColor.innerHTML = '<P>A</P>'
  }

})

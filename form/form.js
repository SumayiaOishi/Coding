
// let button = document.querySelector('.js-button').addEventListener('click',function(){
//  let input =document.querySelector('.js-input').value;

//  if(input=== ''){
//    document.getElementById('demo').innerHTML="Fill up ";
//  }

// });

// form.js
let button = document.querySelector('.js-button').addEventListener('click', function () {
  let inputs = document.querySelectorAll('.js-input');
  let paragraphs = document.querySelectorAll('.demo');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      paragraphs[i].innerHTML = "Fill up";
    } else {
      paragraphs[i].innerHTML = ""; // Clear previous messages if any
    }
  }
});




// let button = document.querySelector('.js-button').addEventListener('click',function(){
//  let input =document.querySelector('.js-input').value;

//  if(input=== ''){
//    document.getElementById('demo').innerHTML="Fill up ";
//  }

// });

// form.js
let button = document.querySelector('.js-button').addEventListener('click', function () {
  let input = document.querySelectorAll('.js-input');
  let para = document.querySelectorAll('.demo');
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

  for (let i = 0; i < input.length; i++) {
    if (input[i].value === '') {
      para[i].innerHTML = "Please fill up this field";
    } else {
      para[i].innerHTML = ""; 
    }
  }

  let password = document.querySelector('input[type="password"]').value;
  if (!passwordRegex.test(password)) {
    para[input.length - 1].innerHTML = "Password must be at least 8 characters";
  } else {
    para[input.length - 1].innerHTML = ""; 
  }

  let formData='';
  input.forEach(inputs=>{
    formData += `<P>${inputs.placeholder}:${inputs.value}</P>`
  });
  document.getElementById('form-data').innerHTML=formData;
  
  
});



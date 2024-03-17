
window.addEventListener('load', function() {
  document.getElementById('input1').value = '';
});

document.getElementById('button1').addEventListener('click', function() {
  let emailInput = document.getElementById('input1');
  let passwordInput = document.getElementById('input2');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

  
  if (emailInput.value.trim() === '') {
      emailError.textContent = 'Please fill up this field';
  } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
  } else {
      emailError.textContent = '';
  }

  
  if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Please fill up this field';
  }  else if(!passwordRegex.test(passwordInput.value)){
        passwordError.textContent='Please enter a valid password';
  }
  else {
      passwordError.textContent = '';
  }



  if (emailError.textContent === '' && passwordError.textContent === '') {
    
    document.location.href = 'todo/todo.html'; 
}
});

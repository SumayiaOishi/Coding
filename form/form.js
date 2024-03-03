let button = document.querySelector('.js-button').addEventListener('click', function () {
  let input = document.querySelectorAll('.js-input');
  let para = document.querySelectorAll('.demo');
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for (let i = 0; i < input.length; i++) {
      if (input[i].value === '') {
          para[i].textContent = "Please fill up this field";
      } else {
          para[i].textContent = "";
      }
  }

  let email = document.querySelector('input[type="email"]').value;
  if (!emailRegex.test(email)) {
      para[3].textContent = "Please enter a valid email address";
  } else {
      para[3].textContent = "";
  }

  let password = document.querySelector('input[type="password"]').value;
  if (!passwordRegex.test(password)) {
      para[4].textContent = "Password must be at least 8 characters";
  } else {
      para[4].textContent = "";
  }
});




"use strict";

const toggle = document.querySelectorAll('.grid-container-left-toggle');
const buttonNext = document.querySelectorAll('.personal-info__button-next');
const buttonPrevious = document.querySelectorAll('.personal-info__button-previous');
let i;

// Left toggle
const clickToggle = function() {
  const active = document.querySelector('.registration-form-open');
  // console.log(active);

  const form = document.getElementById( this.getAttribute('data') );
  // console.log( this.getAttribute('data') );

  if (active) {
    active.classList.remove('registration-form-open');
  }
    form.classList.add('registration-form-open');
};

for (i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener('click', clickToggle);
}

// Button next
const clickButtonNext = function() {
  const active = document.querySelector('.registration-form-open');
  // console.log(active);

  const form = document.getElementById( this.getAttribute('data') );
  // console.log( this.getAttribute('data') );

  if (active) {
    active.classList.remove('registration-form-open');
  }
    form.classList.add('registration-form-open');
};

for (i = 0; i < buttonNext.length; i++) {
  buttonNext[i].addEventListener('click', clickButtonNext);
}

// Button previous
const clickButtonPrevious = function() {
  const active = document.querySelector('.registration-form-open');
  // console.log(active);

  const form = document.getElementById( this.getAttribute('data') );
  // console.log( this.getAttribute('data') );

  if (active) {
    active.classList.remove('registration-form-open');
  }
    form.classList.add('registration-form-open');
};

for (i = 0; i < buttonPrevious.length; i++) {
  buttonPrevious[i].addEventListener('click', clickButtonPrevious);
}

// Button Log In and Hamburger
const bottonLogIn = document.querySelector('#log-in'); 
const gridContainer = document.querySelector('.center');
const hamburgerButton = document.querySelector('.hamburger-button');

// Click Button Log In
bottonLogIn.onclick = function() {
  gridContainer.style.display = 'flex';
  bottonLogIn.style.display = 'none';
};
 
// Button Hamburger
// Button Hamburger mouse over
hamburgerButton.onmouseenter = function() {
  this.classList.add('open');
};

// Button Hamburger mouse leave
hamburgerButton.onmouseleave = function() {
  this.classList.remove('open');
};

// Button Hamburger on click 
hamburgerButton.onclick = function() {
  gridContainer.style.display = 'none';
  bottonLogIn.style.display = 'block';
};

////////////////////////////////////////////////////////////////////////////////////////////////

let pin = document.elements.password;
let confirmPin = document.elements.confirmPassword;

console.log(password.value);
console.log(confirmPassword.value);


const pass = document.querySelector('.personal-info__password');
console.log(pass);

password.onsubmit = function(e) {
  console.log(12);
  
  e.preventDefault();
  this.password.value;
  if (this.password.value === this.confirmPassword.value) {
    console.log(true);
  } else {
    console.log(false);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////

// input.onblur = function() {
//   if (this.value) {
//     this.className = "okay";
//     okay.innerHTML = "";
//   }
// };

// input.onfocus = function() {
//   if (this.className == 'error') {
//     this.className = "  ";
//     error.innerHTML = "";
//   }
// };
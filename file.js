


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;

  let obj = {
    userName,
    userEmail ,
    }
    localStorage.setItem(obj.userEmail,JSON.stringify(obj));
    console.log(obj);
  }
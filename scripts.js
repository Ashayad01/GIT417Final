// Dark & Light mode

let lightModeBtn = document.getElementById('light-mode');

// toggle dark and light mode
 function darkModeOn() {
  document.body.classList.add("darkmode");
 }

 function darkModeOff() {
  document.body.classList.remove("darkmode");
 }

 lightModeBtn.addEventListener('click', function(){
  if(!document.body.classList.contains('darkmode')){
    darkModeOn();
  } else {
    darkModeOff();
  }
 });

// GAllERY 

function switchProduct(productId){
    let gallery = document.querySelectorAll('#gallery section');
    gallery.forEach(product =>{
        if(product.id.startsWith('product')){
            product.classList.add('hiddenItem');
            product.classList.remove('currentItem');
        }
    });

    let displayImg = document.getElementById(productId);
    if(displayImg){
        displayImg.classList.remove('hiddenItem');
        displayImg.classList.add('currentItem');
    }
}

// event Listeners for Gallery
document.getElementById('btn1').addEventListener('click', () => switchProduct('product1'));
document.getElementById('btn2').addEventListener('click', () => switchProduct('product2'));
document.getElementById('btn3').addEventListener('click', () => switchProduct('product3'));
document.getElementById('btn4').addEventListener('click', () => switchProduct('product4'));
document.getElementById('btn5').addEventListener('click', () => switchProduct('product5'));
document.getElementById('btn6').addEventListener('click', () => switchProduct('product6'));


// GAME
function snakeEyes(){
    let userInput = document.getElementById('userNumber').value;
    let dieDisplay1 = document.getElementById('random1');
    let dieDisplay2 = document.getElementById('random2');
    let gameMessage = document.getElementById('snakeEyesMesg');

    let userNumber = parseInt(userInput, 10);

    if(isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        gameMessage.innerHTML = 'Please enter a valid number between 1 and 10.';
        return
    }

    let computerNumber = getRandomNumber(1,10);

    //Display numbers
    dieDisplay1.innerHTML = 'Our Number: ' + computerNumber;
    dieDisplay2.innerHTML = 'Your Number: ' + userNumber;

    // game outcome text
    if(userNumber === computerNumber){
        gameMessage.innerHTML = 'You win!';
    }else{
        gameMessage.innerHTML = 'Sorry, better luck next time.';
    }
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('game-section');addEventListener('submit', function(event){
    event.preventDefault();
    snakeEyes();
});

//Form Validation

function validateForm(e){
    e.preventDefault();
    
    let myForm = document.getElementById("myForm");
    
    
    let errorSpans = document.querySelectorAll(".message");
    
    let isValid = true;
    
    // reset display of the error inputs before validating
    myForm.firstName.classList.remove("errorInput");
    myForm.lastName.classList.remove("errorInput");
    myForm.phoneNumber.classList.remove("errorInput");
    myForm.email.classList.remove("errorInput");
    myForm.message.classList.remove("errorInput");
    
    
    errorSpans.forEach(function(span){
      span.classList.remove("error");
   });
    
    document.querySelector("#success").classList.remove("show");
    document.querySelector("#success").classList.add("hide");
    
    // regular expressions to validate 
    let phoneRegex =  /^\d{3}-\d{3}-\d{4}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // looking for five numbers only
    
    if(myForm.firstName.value === ""){
      myForm.firstName.classList.add("errorInput");
      errorSpans[0].classList.add("error");
      isValid = false;
    }

    if(myForm.lastName.value === ""){
      myForm.lastName.classList.add("errorInput");
      errorSpans[1].classList.add("error");
      isValid = false;
    }
    
    if(!phoneRegex.test(myForm.phoneNumber.value)){
      myForm.phoneNumber.classList.add("errorInput");
      errorSpans[2].classList.add("error");
      isValid = false;
    }
    
    if(!emailRegex.test(myForm.email.value)){
      myForm.email.classList.add("errorInput");
      errorSpans[3].classList.add("error");
      isValid = false;
    }
    
    if(myForm.message.value === ""){
      myForm.message.classList.add("errorInput");
      errorSpans[4].classList.add("error");
      isValid = false;
    }
    
    // if the form is valid, submit it and reset
    if(isValid){
      
      document.querySelector("#success").classList.remove("hide");
      document.querySelector("#success").classList.add("show");
  
      let successP = document.getElementById("formSub");
      successP.innerHTML = '<strong>First Name:</strong> ' + myForm.firstName.value + "<br><strong>Last Name:</strong>" + myForm.lastName.value + "<br><strong>Phone Number:</strong>"  + myForm.phoneNumber.value + "<br><strong>Email:</strong>" + myForm.email.value + "<br><strong>Message:</strong>" + message.value;
      
      myForm.firstName.value = '';
      myForm.lastName.value = '';
      myForm.phoneNumber.value = '';
      myForm.email.value = '';
      myForm.message.value = '';
      myForm.firstName.focus();
    }
  }
  
  // attach event handler to call for form validation on submission
  document.getElementById("myForm").addEventListener("submit", validateForm);
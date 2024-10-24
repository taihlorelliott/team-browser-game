const buttonStart = document.querySelector('#Start');
const display = document.querySelector('.display');
const optionButtons = document.querySelectorAll('.option');


    

optionButtons.forEach((button) => {
   button.style.display = "none"; 
})


// const welcome1 = function() {
//     display.textContent = 'second a line of story select option1 or 2'
// }
// const welcome2 = function() {
//     display.textContent = 'second b line of story select option1 or 2'
// }


buttonStart.addEventListener('click', (event) => {
    nextStep();
    buttonStart.style.display = "none";
});
  
const nextStep = function() {
    display.textContent = 'first line of story select option 1 or 2' 
    // optionButtons.forEach((button) => {
    //     button.style.display = "inline"; 
    //  })
    document.querySelector
}

// buttonA.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       optionA();
//       button.style.display = "none";
//     });
//   });

// const optionA = function() {
//     display.textContent = 'second line of story select option 1 or 2'   
// }


//if the user sees this and they click a button then the display will change to the first prompt

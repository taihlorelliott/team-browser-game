const buttonStart = document.querySelector('#Start');
const display = document.querySelector('.display');
const optionButtons = document.querySelectorAll('.option');
const frontEndButton = document.getElementById('Front')
const backEndButton = document.getElementById('Back')

    

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
  
const nextStep = function() { // so in this block i changed the display.textContent to inner.html
    // because it work with the symbol <br> That allows you to add multiple text in the display with line breaks
    //making it look cleaner 
    display.innerHTML = "<span class='text-black'>Welcome Software Engineer!<br>Are you a back end? or a front end engineer?"
frontEndButton.style.display = 'inline-block'; // i have discover if you go to css and create a new property
backEndButton.style.display = 'inline-block';// and then put it on your text <span class='Created property'> you can control the style 
    // optionButtons.forEach((button) => {// of the text
    //     button.style.display = "inline"; 
    //  })
    document.querySelector
}
frontEndButton.addEventListener('click', () => { // then under the same function added an event listener for
    //what would happen if you clicked the front end button same thing with the back end button 
    display.innerHTML = "<span class='text-black'>You choose Frontend! Now you are in charge of:<br>User Interface Development<br>Performance Optimization<br>Cross-Browser Compatibility<br>Collaboration with Designers<br>Version Control Management<br>Accessibility<br>Implementation API Integration";
    frontEndButton.style.display = 'none';  //when you add the the text and then yoou add button style display and you set it to none it makes the button dissappear
    backEndButton.style.display = 'none'; // so now we now how to repeatly make buttons appear and dissapper 
}); 
backEndButton.addEventListener('click', () => {
    display.innerHTML = "<span class='text-black'>You choose BackEnd! Now you are in charge of:<br>Server-Side Logic Development<br>Database Management<br>API Development and Integration<br>Security Implementation<br>Performance Optimization<br>Application Architecture Design<br>Monitoring and Troubleshooting";
    frontEndButton.style.display = 'none'; 
    backEndButton.style.display = 'none';
});
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
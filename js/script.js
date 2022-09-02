// const options = ['rock', 'paper', 'scissors']; 

// function checkWiner(user = null, cpu = null) {
//     if((user === options[0] && cpu === options[2]) || (user === options[1] && cpu === options[0]) || (user === options[2] && cpu === options[1])) {
//         alert("You win!.");
//     } else if((user === options[2] && cpu === options[0]) || (user === options[0] && cpu === options[1]) || (user === options[1] && cpu === options[2])) {
//         alert("The cpu wins!.")
//     } else {
//         alert("Tie!");
//     }
// }

// function setOption() {
//     let stop = false; // Stop the main loop

//     do {
//         let user;
//         // Get the index in order to get the option of the cpu
//         let index = Math.floor(Math.random() * 3);
//         // Set the option of the cpu
//         let cpu = options[index];

//         // Set the option of the user
//         user = Number(prompt("Hello!, please choose your option: 0. rock, 1. paper and 2. scissors"));

//         // Check that the input is correct
//         if(user === 0 || user === 1 || user === 2) {
//             user = options[user];
            
//             checkWiner(user, cpu);
//         } else {
//             alert("Please enter a valid option")
//         }

//         let option = Number(prompt("Would you like to continue?: 0. no and any other number. yes"));

//         // change the value of stop
//         if(option) {
//             stop = false;
//         } else {
//             stop = true;
//         }
//     } while(!stop)

// }

// setOption()

// Script to close and open the settings panel
const openSettingAndQuestions = document.getElementById('openSettingAndQuestions');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingAndQuestions = document.getElementById('closeSettingAndQuestions');

openSettingAndQuestions.addEventListener('click', (e) => {
    openSettingAndQuestions.classList.add('hidden'); // Hide the setthing and questions icon
    settingsPanel.classList.remove('hidden'); // Show up the settings panel
});


closeSettingAndQuestions.addEventListener('click', (e) => {
    settingsPanel.classList.add('hidden'); // Hide the panel
    openSettingAndQuestions.classList.remove('hidden'); // Show up the setthing and questions icon
});
const backgroundMusic = new Audio('../audio/rockpaperscissors.mp3');

// Script to validate the background sound

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
    settingsPanel.classList.remove('hidden'); // Show up the settings panel
});


closeSettingAndQuestions.addEventListener('click', (e) => {
    settingsPanel.classList.add('hidden'); // Hide the panel
});

// Script to show up the content of the about it item
const aboutIt = document.getElementById('aboutIt');
const aboutItDescription = document.getElementById('aboutItDescription');

aboutIt.addEventListener('click', (e) => {
    aboutItDescription.classList.toggle('hidden');
});

// Script to mute and unmute the sound 
const mute = document.getElementById('mute');

mute.addEventListener('click', (e) => {
    if(mute.classList.contains('mute')) {
        mute.textContent = 'Mute';
        alert('unmuted');
        mute.classList.remove('mute');
    } else {
        mute.textContent = 'Unmute';
        alert('muted');
        mute.classList.add('mute');
    }
});

// Script to restart the game
const restart = document.getElementById('restart');

restart.addEventListener('click', (e) => {
    alert('Restarted');
});
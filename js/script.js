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

let userScore = 6;
let cpuScore = 8;

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
const userScoreItem = document.getElementById('userScore');
const cpuScoreItem = document.getElementById('cpuScore');
const result = document.getElementById('result');
const resultImg = document.getElementById('resultImg');
const playersImg = document.getElementById('playersImg');

restart.addEventListener('click', (e) => {
    userScoreItem.textContent = '0';
    userScore = 0;
    cpuScoreItem.textContent = '0';
    cpuScore = 0;
    resultImg.src = '../assets/doubts-button.png'; // Reset the image of the result
    resultImg.alt = 'Question mark Icon'; // Reset the alt text of the result 
    result.classList.toggle('shadow');
    playersImg.src = './assets/user.png'; // Reset the image of the user icon
    playersImg.alt = 'Default icon'; // Reset the alt text of the user icon
    settingsPanel.classList.add('hidden'); // Hide the panel
});

// Script to open and close the icon's player selector
const openPlayerIcons = document.getElementById('openPlayerIcons');
const selection = document.getElementById('selection');
const closeSelection = document.getElementById('closeSelection');

openPlayerIcons.addEventListener('click', (e) => {
    selection.classList.remove('hidden');
});

closeSelection.addEventListener('click', (e) => {
    selection.classList.add('hidden');
});

// Script to choose the icons of the profile
const elements = Array.prototype.slice.call(document.getElementsByClassName('element__img'));

elements.forEach((element) => {
    element.addEventListener('click', (event) => { // Add a click event to each icon
        playersImg.src= element.src;
        playersImg.alt = element.alt;
        selection.classList.add('hidden');
    })
});

// Script to get the file when dop or upload file from the input button
const selectionInput = document.getElementById('selectionInput');

selectionInput.addEventListener('input', (e) => {
    const splitedString =  selectionInput.value.split('\\');
    playersImg.src= `../assets/${splitedString[2]}`;
    playersImg.alt = 'User icon';
    selection.classList.add('hidden');
});
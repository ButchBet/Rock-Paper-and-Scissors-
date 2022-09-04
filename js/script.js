// Script to validate the background sound
const backgroundMusic = new Audio('../audio/rockpaperscissors.mp3');

// Save the posible selections of the cpu
const options = ['rock', 'paper', 'scissors']; 
let userScore = 0; // Score of the user
let cpuScore = 0; // Score of the cpu


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
    resultImg.src = './assets/doubts-button.png'; // Reset the image of the result
    resultImg.alt = 'Question mark Icon'; // Reset the alt text of the result 
    result.classList.remove('shadow');
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
    playersImg.src= `./assets/${splitedString[2]}`;
    playersImg.alt = 'User icon';
    selection.classList.add('hidden');
});


// Script to catch the choice of the user
const choises = Array.from(document.getElementsByClassName('choice__img'));

choises.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        result.classList.add('shadow');

        let index = Math.floor(Math.random() * 3); // Get the index in order to get the option of the cpu
        
        let cpu = options[index]; // Set the option of the cpu

        let user = choice.id;
        
        let imgUrl = checkWiner(user, cpu);

        userScoreItem.textContent = userScore.toString(); // Set the result in the score panel
        cpuScoreItem.textContent = cpuScore.toString();

        resultImg.src = imgUrl;
    })
});


function checkWiner(user = null, cpu = null) {
    let result;

    if((user === options[0] && cpu === options[2]) || (user === options[1] && cpu === options[0]) || (user === options[2] && cpu === options[1])) {
        userScore++;
        result = `./assets/${user}${cpu.charAt(0).toUpperCase() + cpu.slice(1)}.png`;
    } else if((user === options[2] && cpu === options[0]) || (user === options[0] && cpu === options[1]) || (user === options[1] && cpu === options[2])) {
        cpuScore++;
        result = `./assets/${cpu}${user.charAt(0).toUpperCase() + user.slice(1)}.png`;
    } else {
        result = `./assets/${cpu}${user.charAt(0).toUpperCase() + user.slice(1)}.png`;
    }

    return result;
}
// Start Screen
const startScreenTitle = document.createElement("span");
startScreenTitle.classList.add("start-screen-title");
startScreenTitle.innerText = "S P E A K I T";
const startScreenP1 = document.createElement("p");
startScreenP1.classList.add("start-screen-p-1");
startScreenP1.innerText = "Click on the words to hear them sound";
const startScreenP2 = document.createElement("p");
startScreenP2.classList.add("start-screen-p-2");
startScreenP2.innerText = "Click on the button and speak the words into the microphone";

const startScreenButton = document.createElement("button");
startScreenButton.classList.add("start-screen-button");
startScreenButton.innerText = "Start";
ROOT_STARTSCREEN.prepend(startScreenButton);
ROOT_STARTSCREEN.append(startScreenTitle, startScreenP1, startScreenP2);

let chosenCardContainer = document.querySelector(".chosen-card-container");

// button click
startScreenButton.addEventListener('click', ()=>{
    ROOT_STARTSCREEN.setAttribute('id', 'hide');
    ROOT_CARDS.classList.remove("close");    
})

// let statFirstCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statFirstCategoryCard += `
//     <div class="statistic-card" src="${words[0][i].image}">       
//         <span class="stat-word">${words[0][i].word}</span>
//         <audio src="${words[0][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statFirstCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statFirstCategoryCard2 += `
//     <div class="statistic-card" src="${words[0][i].image}">
//         <span class="stat-word">${words[0][i].word}</span>
//         <audio src="${words[0][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statSecondCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statSecondCategoryCard += `
//     <div class="statistic-card" src="${words[1][i].image}">
//         <span class="stat-word">${words[1][i].word}</span>
//         <audio src="${words[1][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statSecondCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statSecondCategoryCard2 += `
//     <div class="statistic-card" src="${words[1][i].image}">
//         <span class="stat-word">${words[1][i].word}</span>
//         <audio src="${words[1][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statThirdCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statThirdCategoryCard += `
//     <div class="statistic-card" src="${words[2][i].image}">
//         <span class="stat-word">${words[2][i].word}</span>
//         <audio src="${words[2][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statThirdCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statThirdCategoryCard2 += `
//     <div class="statistic-card" src="${words[2][i].image}">
//         <span class="stat-word">${words[2][i].word}</span>
//         <audio src="${words[2][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statFourthCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statFourthCategoryCard += `
//     <div class="statistic-card" src="${words[3][i].image}">
//         <span class="stat-word">${words[3][i].word}</span>
//         <audio src="${words[3][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statFourthCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statFourthCategoryCard2 += `
//     <div class="statistic-card" src="${words[3][i].image}">
//         <span class="stat-word">${words[3][i].word}</span>
//         <audio src="${words[3][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statFifthCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statFifthCategoryCard += `
//     <div class="statistic-card" src="${words[4][i].image}">
//         <span class="stat-word">${words[4][i].word}</span>
//         <audio src="${words[4][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statFifthCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statFifthCategoryCard2 += `
//     <div class="statistic-card" src="${words[4][i].image}">
//         <span class="stat-word">${words[4][i].word}</span>
//         <audio src="${words[4][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statSixCategoryCard = '';
// for(let i = 0; i < 10; i++){
//     statSixCategoryCard += `
//     <div class="statistic-card" src="${words[5][i].image}">
//         <span class="stat-word">${words[5][i].word}</span>
//         <audio src="${words[5][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }
// let statSixCategoryCard2 = '';
// for(let i = 10; i < 20; i++){
//     statSixCategoryCard2 += `
//     <div class="statistic-card" src="${words[5][i].image}">
//         <span class="stat-word">${words[5][i].word}</span>
//         <audio src="${words[5][i].audio}" id="card-audio"></audio>
//     </div>
//     `
// }

// const statisticContent  =  statFirstCategoryCard + statFirstCategoryCard2 + 
// statSecondCategoryCard + statSecondCategoryCard2 +
// statThirdCategoryCard + statThirdCategoryCard2 +
// statFourthCategoryCard + statFourthCategoryCard2 +
// statFifthCategoryCard + statFifthCategoryCard2 +
// statSixCategoryCard + statSixCategoryCard2;

// an>Word</span>

// ROOT_STATISTIC.prepend(stats);
// ROOT_STATISTIC.innerHTML = stats + statisticContent;

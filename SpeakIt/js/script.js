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

ROOT_STARTSCREEN.append(startScreenTitle, startScreenP1, startScreenP2, startScreenButton);

let chosenCardContainer = document.querySelector(".chosen-card-container");

// button click
startScreenButton.addEventListener('click', ()=>{
    ROOT_STARTSCREEN.setAttribute('id', 'hide');
    ROOT_CARDS.classList.remove("close");
    
    
})

// const getWords = async (page, group) => {
//     const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${5}&group=${0}`;
//     const res = await fetch(url);
//     const json = await res.json();
//     console.log(JSON.stringify(json, null, 1));
// }; 

// getWords();
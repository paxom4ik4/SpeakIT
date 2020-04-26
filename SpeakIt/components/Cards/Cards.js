const chosenCardTranslation = document.querySelector(".chosen-card-translation");

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");

const switcher = document.querySelector(".switcher");


// Render Cards
let firstCategoryCard = '';
for(let i = 0; i < 10; i++){
    firstCategoryCard += `
    <div class="card" src="${words[0][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[0][i].word}</span>
        <span class="transcription">${words[0][i].transcription}</span>
        <audio src="${words[0][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let firstCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    firstCategoryCard2 += `
    <div class="card" src="${words[0][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[0][i].word}</span>
        <span class="transcription">${words[0][i].transcription}</span>
        <audio src="${words[0][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let secondCategoryCard = '';
for(let i = 0; i < 10; i++){
    secondCategoryCard += `
    <div class="card" src="${words[1][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[1][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[1][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let secondCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    secondCategoryCard2 += `
    <div class="card" src="${words[1][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[1][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[1][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let thirdCategoryCard = '';
for(let i = 0; i < 10; i++){
    thirdCategoryCard += `
    <div class="card" src="${words[2][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[2][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[2][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let thirdCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    thirdCategoryCard2 += `
    <div class="card" src="${words[2][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[2][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[2][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fourthCategoryCard = '';
for(let i = 0; i < 10; i++){
    fourthCategoryCard += `
    <div class="card" src="${words[3][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[3][i].word}</span>
        <span class="transcription">${words[3][i].transcription}</span>
        <audio src="${words[3][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fourthCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    fourthCategoryCard2 += `
    <div class="card" src="${words[3][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[3][i].word}</span>
        <span class="transcription">${words[3][i].transcription}</span>
        <audio src="${words[3][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fifthCategoryCard = '';
for(let i = 0; i < 10; i++){
    fifthCategoryCard += `
    <div class="card" src="${words[4][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[4][i].word}</span>
        <span class="transcription">${words[4][i].transcription}</span>
        <audio src="${words[4][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fifthCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    fifthCategoryCard2 += `
    <div class="card" src="${words[4][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[4][i].word}</span>
        <span class="transcription">${words[4][i].transcription}</span>
        <audio src="${words[4][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let sixCategoryCard = '';
for(let i = 0; i < 10; i++){
    sixCategoryCard += `
    <div class="card" src="${words[5][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[5][i].word}</span>
        <span class="transcription">${words[5][i].transcription}</span>
        <audio src="${words[5][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let sixCategoryCard2 = '';
for(let i = 10; i < 20; i++){
    sixCategoryCard2 += `
    <div class="card" src="${words[5][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="black" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[5][i].word}</span>
        <span class="transcription">${words[5][i].transcription}</span>
        <audio src="${words[5][i].audio}" id="card-audio"></audio>
    </div>
    `
}

cardsContainer.innerHTML = `
    ${firstCategoryCard}
`

// categoryes parts

let firstCategoryPart = [firstCategoryCard, firstCategoryCard2];
let secondCategoryPart = [secondCategoryCard, secondCategoryCard2];
let thirdCategoryPart = [thirdCategoryCard, thirdCategoryCard2];
let fourthCategoryPart = [fourthCategoryCard, fourthCategoryCard2];
let fifthCategoryPart = [fifthCategoryCard, fifthCategoryCard2];
let sixCategoryPart = [sixCategoryCard, sixCategoryCard2];

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


// Navigation
const navLinks = document.querySelectorAll(".nav-item");

const navigation = document.querySelector(".navigation");
navigation.addEventListener('click', (e)=>{
    let target = e.target;
    if(target.tagName == "SPAN"){
        let chosenCategory = target.innerText;;
        if(chosenCategory == 1){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';

            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);

            cardsContainer.innerHTML = `
                ${firstCategoryPart[i]}
            `

            cardsContainer.addEventListener('click', divHandling);
        }
        else if (chosenCategory == 2){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);

            cardsContainer.innerHTML = `
                ${secondCategoryPart[i]}
            `
        }
        else if (chosenCategory == 3){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);

            cardsContainer.innerHTML = `
                ${thirdCategoryPart[i]}
            `
        }
        else if (chosenCategory == 4){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);

            cardsContainer.innerHTML = `
                ${fourthCategoryPart[i]}
            `
        }
        else if (chosenCategory == 5){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);
            cardsContainer.innerHTML = `
                ${fifthCategoryPart[i]}
            `
        }
        else if (chosenCategory == 6){
            let cards = document.querySelectorAll(".card");
            let starsContainer = document.querySelector(".stars");
            chosenCardImage.setAttribute("src", "img/blank.jpg");
            cards.forEach(elem =>{
                elem.classList.remove("active");
            })    
            cards.forEach(elem =>{
                elem.classList.remove("correct");
            })
            speechRecognitionText.innerText = '';
            starsContainer.innerHTML = '';

            chosenCardImage.setAttribute("src", "img/blank.jpg");
            chosenCardTranslation.innerText = '';

            navLinks.forEach(elem =>{
                elem.classList.remove("active-nav");
            })
            target.classList.add('active-nav');

            let i = randomInteger(0,1);

            cardsContainer.innerHTML = `
                ${sixCategoryPart[i]}
            `
        }
    }
    else{
        return;
    }
})


const buttons = document.createElement("div");
buttons.classList.add("buttons-container");
buttons.innerHTML = `
    <button class="restart-button button">Restart</button>
    <button class="speak-button button">Speak, please</button>
    <button class="results-button button">Results</button>
`;

ROOT_CARDS.append(cardsContainer, buttons);

// let urlText = ;
// Translation
function getTranslation (cardWordSelected) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T123704Z.20495078d07340ab.0a8c19413f7291513d399c7f843a551590fb7636&text= ${cardWordSelected} &lang=en-ru`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let translateWord = data.text;
        chosenCardTranslation.innerText = translateWord;
      });
    }



;
const chosenCardImage = document.querySelector(".chosen-card-image");
const restartButton = document.querySelector(".restart-button");


cardsContainer.addEventListener('click', divHandling);

function divHandling(event){
    let cards = document.querySelectorAll(".card");
    let target = event.target;
    let targetDiv = target.closest("DIV");
    cards.forEach(elem =>{
        elem.classList.remove("active");
    })
    targetDiv.classList.add("active");
    let cardImg = targetDiv.getAttribute("src");
    chosenCardImage.setAttribute("src", cardImg);
    let cardAudio = targetDiv.childNodes[7];
    cardAudio.play();
    let cardWord = targetDiv.childNodes[3];
    let cardWordSelected = cardWord.innerText;
    getTranslation(cardWordSelected);   
}



const startButton = document.querySelector(".speak-button");

// Stars

const star = `
    <img src="img/star-win.svg">
`;

// Speech Recognition
let speechRecognitionText = document.querySelector(".speech-recognition-text");

let recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'en-US';

function voiseStart(){
    let cards = document.querySelectorAll(".card");
    cards.forEach(elem =>{
        elem.classList.remove("active");
    }) 

    let starsContainer = document.querySelector(".stars");

    let pageWords = document.querySelectorAll(".word");
    let pageWordsText = [];


    pageWords.forEach(elem =>{
        pageWordsText.push(elem.innerText);
    })

    
    recognizer.onresult = function (event) {
        let result = event.results[event.resultIndex];
        if (result.isFinal) {
            speechRecognitionText.innerText = result[0].transcript;


            let finalWord = result[0].transcript;

            finalWord.toLowerCase();

            console.log(finalWord);
            function arrayContains(word, array){
                return(array.indexOf(word) > -1);
            }

            
            if(arrayContains(finalWord, pageWordsText)){
                pageWords.forEach(elem =>{
                    if (elem.innerText == finalWord){
                        let correctDiv = elem.parentNode;
                        correctDiv.classList.add("correct");
                        let correctDivImage = correctDiv.getAttribute("src");
                        chosenCardImage.setAttribute('src', correctDivImage);
                        getTranslation(finalWord);
                        starsContainer.innerHTML += star;
                        
                    }
                })
            }
            
        } else {
          return;
        }
    };

    recognizer.start();

    
    
}


startButton.addEventListener('click', voiseStart);

// restart

restartButton.addEventListener('click', ()=>{
    let cards = document.querySelectorAll(".card");
    let starsContainer = document.querySelector(".stars");
    chosenCardImage.setAttribute("src", "img/blank.jpg");
    cards.forEach(elem =>{
        elem.classList.remove("active");
    })    
    cards.forEach(elem =>{
        elem.classList.remove("correct");
    })
    speechRecognitionText.innerText = '';
    chosenCardTranslation.innerText = '';
    starsContainer.innerHTML = '';
})

const buttonsContainer = document.querySelector(".buttons-container");

const resultButton = document.querySelector(".results-button");

resultButton.addEventListener('click', StatAppend);

const mistakesCorrect = document.querySelector(".mistakes-correct");
const statButtons = document.querySelector(".stat-buttons");

function StatAppend(){
    mistakesCorrect.classList.remove("hide");
    mistakesCorrect.classList.add("mistakes-correct");

    let body = document.querySelector("body");
    body.classList.add("stat-back");
    let starsContainer = document.querySelector(".stars");
    let mistakesSpan = document.createElement("span");
    mistakesSpan.classList.add("mistakes-span");
    let correctWords = document.createElement("span");
    correctWords.classList.add("correct-words");
    mistakesCorrect.append(mistakesSpan, correctWords);

    let correctWordsAll = document.querySelectorAll(".correct");
    let correctWordsNumber = correctWordsAll.length;
    correctWords.innerText = "Количество слов, которые вы знаете: " + correctWordsNumber;
    
    let wrongWordsAll = document.querySelectorAll(".card");
    let wrongWordsNumber = wrongWordsAll.length - correctWordsNumber;
    mistakesSpan.innerText = "Количество слов, которые вы не знаете: " + wrongWordsNumber;
    
    chosenCardContainer.classList.add("hide");
    switcher.classList.add("hide");
    buttonsContainer.classList.add("hide");
    let cards = document.querySelectorAll(".card");    
    cardsContainer.classList.add("stat-container");
    cards.forEach(elem =>{
        elem.classList.remove("card");
        elem.classList.add("stat-card");
    })
    starsContainer.classList.add("hide");

    let returnButton = document.createElement("button");
    let newGameButton = document.createElement("button");
    returnButton.innerText = "Return";
    newGameButton.innerText = "New Game";
    returnButton.classList.add("button-stat");
    newGameButton.classList.add("button-stat");

    statButtons.classList.remove("hide");
    statButtons.prepend(returnButton, newGameButton);

    returnButton.addEventListener('click', ()=>{
        body.classList.remove("stat-back");

        starsContainer.classList.remove("hide");
        // cardsContainer.remove(mistakesSpan);
        // cardsContainer.remove(correctWords);
        chosenCardContainer.classList.remove("hide");
        switcher.classList.remove("hide");
        statButtons.classList.add("hide");
        statButtons.removeChild(returnButton);
        statButtons.removeChild(newGameButton);    
        cardsContainer.classList.remove("stat-container");
        cards.forEach(elem =>{
            elem.classList.remove("stat-card");
            elem.classList.add("card");   
        })
        buttonsContainer.classList.remove("hide");
        mistakesCorrect.classList.add("hide");
        mistakesCorrect.removeChild(mistakesSpan);
        mistakesCorrect.removeChild(correctWords);
        
        speechRecognitionText.innerText = '';
        chosenCardTranslation.innerText = '';   
        chosenCardImage.setAttribute("src", "img/blank.jpg");

        cards.forEach(elem =>{
            elem.classList.remove("active");
            elem.classList.add("card");
        })
    })

    newGameButton.addEventListener('click', ()=>{
        body.classList.remove("stat-back");

        starsContainer.classList.remove("hide");
        // cardsContainer.remove(mistakesSpan);
        // cardsContainer.remove(correctWords);
        chosenCardContainer.classList.remove("hide");
        switcher.classList.remove("hide");
        statButtons.classList.add("hide");
        statButtons.removeChild(returnButton);
        statButtons.removeChild(newGameButton);    
        cardsContainer.classList.remove("stat-container");
        cards.forEach(elem =>{
            elem.classList.remove("stat-card");
            elem.classList.add("card");   
        })
        buttonsContainer.classList.remove("hide");
        mistakesCorrect.classList.add("hide");
        mistakesCorrect.removeChild(mistakesSpan);
        mistakesCorrect.removeChild(correctWords);
        
        speechRecognitionText.innerText = '';
        chosenCardTranslation.innerText = '';   
        chosenCardImage.setAttribute("src", "img/blank.jpg");
        starsContainer.innerHTML = '';
        cards.forEach(elem =>{
            elem.classList.remove("active");
            elem.classList.remove("correct");
            elem.classList.add("card");
        })  
    })
}

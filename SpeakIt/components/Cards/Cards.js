const chosenCardTranslation = document.querySelector(".chosen-card-translation");

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");


// Render Cards
let firstCategoryCard = '';
for(let i = 0; i < 10; i++){
    firstCategoryCard += `
    <div class="card" src="${words[0][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[0][i].word}</span>
        <span class="transcription">${words[0][i].transcription}</span>
        <audio src="${words[0][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let secondCategoerCard = '';
for(let i = 0; i < 10; i++){
    secondCategoerCard += `
    <div class="card" src="${words[1][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[1][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[1][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let thirdCategoerCard = '';
for(let i = 0; i < 10; i++){
    thirdCategoerCard += `
    <div class="card" src="${words[2][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[2][i].word}</span>
        <span class="transcription">${words[1][i].transcription}</span>
        <audio src="${words[2][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fourthCategoerCard = '';
for(let i = 0; i < 10; i++){
    fourthCategoerCard += `
    <div class="card" src="${words[3][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[3][i].word}</span>
        <span class="transcription">${words[3][i].transcription}</span>
        <audio src="${words[3][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let fifthhCategoerCard = '';
for(let i = 0; i < 10; i++){
    fifthhCategoerCard += `
    <div class="card" src="${words[4][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[4][i].word}</span>
        <span class="transcription">${words[4][i].transcription}</span>
        <audio src="${words[4][i].audio}" id="card-audio"></audio>
    </div>
    `
}
let sixhCategoerCard = '';
for(let i = 0; i < 10; i++){
    sixhCategoerCard += `
    <div class="card" src="${words[5][i].image}">
        <span class="audio-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 35"><path fill="rgb(170, 170, 170)" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg></span>
        <span class="word">${words[5][i].word}</span>
        <span class="transcription">${words[5][i].transcription}</span>
        <audio src="${words[5][i].audio}" id="card-audio"></audio>
    </div>
    `
}

cardsContainer.innerHTML = `
    ${firstCategoryCard}
`
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

            cardsContainer.innerHTML = `
                ${firstCategoryCard}
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

            cardsContainer.innerHTML = `
                ${secondCategoerCard}
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

            cardsContainer.innerHTML = `
                ${thirdCategoerCard}
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

            cardsContainer.innerHTML = `
                ${fourthCategoerCard}
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

            cardsContainer.innerHTML = `
                ${fifthhCategoerCard}
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

            cardsContainer.innerHTML = `
                ${sixhCategoerCard}
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
    console.log(cards);
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
    console.log(pageWordsText);


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



const firstArr = ['You should really ', "If I were you, I wouldn't ", "At least once, "], 
      secondArr = ['try', 'dance salsa  '], 
      thirdArr = [];



function firsPart() {
    const a = Math.floor(Math.random() * 3);
    return firstArr[a];
};

function secondPart() {
    const a = Math.floor(Math.random() * 3);
    return secondArr[a];
};


function thirdPart() {
    const a = Math.floor(Math.random() * 3);
    return thirdArr[a];
};


function getRandomMessage() {

};


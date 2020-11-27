import countClicks from './clicks.js';
import generateLog from './logs.js'
import Pokemon from './pokemon.js';
import getRandomNum from './utils.js';

const player1 = new Pokemon({
    name: `Picachu`,
    hp: 500,
    type: 'electric',
    selectors: 'character'
})

const player2 = new Pokemon({
    name: `Charmander`,
    hp: 450,
    type: 'fire',
    selectors: 'enemy'
})

const characterBtn = countClicks(10, player1.btn);
const enemyBtn = countClicks(10, player2.btn);

const onPlayer1BtnClick = () => {
    characterBtn();
    player1.changeHP(getRandomNum(80, 100), function (count) {
        console.log('Actions after click', count);
        console.log(generateLog(player1, player2, count));
    })
    countClicks(player1.btn);
};

const onPlayer2BtnClick = () => {
    enemyBtn();
    player2.changeHP(getRandomNum(120, 180), function (count) {
        console.log('Actions after click', count);
        console.log(generateLog(player1, player2, count));
    })
    countClicks(player2.btn);
};

const addClickListeners = () => {
    player1.btn.addEventListener('click', onPlayer1BtnClick);
    player2.btn.addEventListener('click', onPlayer2BtnClick);
}
const init = () => {
    addClickListeners();
};



init();

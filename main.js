import countClicks from './clicks.js';
import generateLog from './logs.js'
import Pokemon from './pokemon.js';
import { getRandomNum, getRandomArrayValue } from './utils.js';
import { createFightText, deleteFightText } from './create-text.js';
import pokemons from './pokemons.js';
import { createAttacksBtn, createStartBtn, createResetBtn, removeBtn } from './buttons.js '
const control = document.querySelector('#control-player1');
const control2 = document.querySelector('#control-player2');


const player1 = new Pokemon({
    ...getRandomArrayValue(pokemons),
    selectors: 'player1'
})
const player2 = new Pokemon({
    ...getRandomArrayValue(pokemons),
    selectors: 'player2'
})

const initFight = (startBtn) => {
    if (startBtn) {
        removeBtn(startBtn);
    }
    player1.attacks.forEach(item => {
        const btn = createAttacksBtn(item);
        const btnCount = countClicks(item.maxCount, btn)
        btn.addEventListener('click', () => {
            console.log('click', btn.innerText)
            btnCount();
            player2.changeHP(getRandomNum(item.maxDamage, item.minDamage), function (count) {
                const log = generateLog(player2, player1, count);
                createFightText(log);
            });
        })
        control.appendChild(btn);
    })
    player2.attacks.forEach(item => {
        const btn = createAttacksBtn(item);
        const btnCount = countClicks(item.maxCount, btn)
        btn.addEventListener('click', () => {
            console.log('click', btn.innerText)
            btnCount();
            player1.changeHP(getRandomNum(item.maxDamage, item.minDamage), function (count) {
                const log = generateLog(player1, player2, count);
                createFightText(log);
            });
        })
        control2.appendChild(btn);
    })

}

const startGame = () => {
    const btn = createStartBtn();
    btn.addEventListener('click', () => {
        initFight(btn);
        createResetBtn();
        onResetBtnClick();
    });
}

const removeAllBtns = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.remove();
    });
}

const onResetBtnClick = () => {
    const resetBtn = document.querySelector('.reset-button');
    resetBtn.addEventListener('click', resetGame)
}

const resetGame = () => {
    removeAllBtns();
    deleteFightText();
    startGame();
    player2.recoverHP();
    player1.recoverHP();
}

startGame();

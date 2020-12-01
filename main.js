import countClicks from './clicks.js';
import generateLog from './logs.js'
import Pokemon from './pokemon.js';
import { getRandomArrayValue } from './utils.js';
import { createFightText, deleteFightText } from './create-text.js';
import { createAttacksBtn, createStartBtn, createResetBtn, removeBtn, removeAllBtns } from './buttons.js '
const control = document.querySelector('#control-player1');
const control2 = document.querySelector('#control-player2');


class Game {
    getFight = async (player1, player2, attackId) => {
        const response = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1.id}&attackId=${attackId}&player2id=${player2.id}`);
        const body = await response.json();
        return body;
    };
    getPokemons = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
        const body = await response.json()

        return body;
    };

    init = async () => {
        const pokemons = await this.getPokemons();
        let player1 = new Pokemon({
            ...getRandomArrayValue(pokemons),
            selectors: 'player1'
        })
        const player2 = new Pokemon({
            ...getRandomArrayValue(pokemons),
            selectors: 'player2'
        })
        if (player1.name === player2.name) {
            player1 = { ...player1 };
        }
        player1.attacks.forEach((item) => {
            const btn = createAttacksBtn(item);
            const btnCount = countClicks(item.maxCount, btn)
            btn.addEventListener('click', async () => {
                const damage = await this.getFight(player1, player2, item.id);
                const { kick } = damage;
                console.log('click', btn.innerText)
                btnCount();
                player2.changeHP(kick.player1, function (count) {
                    const log = generateLog(player2, player1, count);
                    createFightText(log);
                    setTimeout(() => {
                        player1.changeHP(kick.player2);
                    }, 1000)

                });
            })
            control.appendChild(btn);
        })
    }
    startGame = () => {
        const btn = createStartBtn();
        btn.addEventListener('click', () => {
            if (btn) {
                btn.remove();
            }
            createResetBtn();
            this.onResetBtnClick();
            this.init();
        });
    }
    resetGame = () => {
        removeAllBtns();
        deleteFightText();
        this.startGame();
        this.player2.recoverHP();
        this.player1.recoverHP();
    }
    onResetBtnClick = () => {
        const resetBtn = document.querySelector('.reset-button');
        resetBtn.addEventListener('click', this.resetGame)
    }

}
const game = new Game();
game.startGame();
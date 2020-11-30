import { getRandomArrayValue } from './utils.js';
const generateLog = (player1, player2, count) => {
    const { name, hp: { total, current } } = player1;
    const { name: enemyName } = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName} , не помня себя от испуга, ударил в предплечье врага, - ${count}, ${current}/${total}`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага, -${count}, ${current}/${total}.`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил, -${count}, ${current}/${total}.`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар, -${count}, ${current}/${total}.`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника, -${count}, ${current}/${total}.`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар, -${count}, ${current}/${total}.`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар, -${count}, ${current}/${total}.`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника, -${count}, ${current}/${total}`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника, -${count}, ${current}/${total}.`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику, -${count}, ${current}/${total}.`
    ];
    return getRandomArrayValue(logs)
}

export default generateLog;
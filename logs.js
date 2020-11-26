import getRandomNum from './utils.js';

const generateLog = (player1, player2, count) => {
    const { name, hp: { total, current } } = player1;
    const { name: enemyName } = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName} , не помня себя от испуга, ударил в предплечье врага, - ${count}, ${total}/${current}`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага, -${count}, ${total}/${current}.`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил, -${count}, ${total}/${current}.`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар, -${count}, ${total}/${current}.`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника, -${count}, ${total}/${current}.`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар, -${count}, ${total}/${current}.`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар, -${count}, ${total}/${current}.`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника, -${count}, ${total}/${current}`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника, -${count}, ${total}/${current}.`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику, -${count}, ${total}/${current}.`
    ];
    return logs[getRandomNum(logs.length) - 1]
}

export default generateLog;
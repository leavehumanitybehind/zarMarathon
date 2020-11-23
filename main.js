const logs = document.querySelector('#logs');

const character = {
    name: `Picachu`,
    defaultHP: 100,
    damageHP: 100,
    btn: document.getElementById(`btn-kick-character`),
    elHP: document.getElementById(`health-character`),
    widthHP: document.getElementById(`progressbar-character`),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderHPBar: renderHPBar
};

const enemy = {
    name: `Charmander`,
    defaultHP: 100,
    damageHP: 100,
    btn: document.getElementById(`btn-kick-enemy`),
    elHP: document.getElementById(`health-enemy`),
    widthHP: document.getElementById(`progressbar-enemy`),
    changeHP: changeHP,
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderHPBar: renderHPBar
};

function renderHPBar() {
    const {widthHP, damageHP} = this;
    widthHP.style.width = damageHP + '%';
};

function renderHPLife() {
    const { elHP, defaultHP, damageHP } = this;
    elHP.innerText = defaultHP + '/' + damageHP;
};

function renderHP() {
    this.renderHPLife();
    this.renderHPBar();
}

function createFightText(text) {
    const p = document.createElement('p');
    for (let i = 0; i<= 10; i++) {
        p.innerText = text;
        logs.insertBefore(p, logs.children[0]);
}
    };



function changeHP(count) {
    this.damageHP -= count;
    const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
    createFightText(log);
    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert(`${this.name} проиграл`);
        this.btn.setAttribute(`disabled`, `disabled`);
    }
    this.renderHP();
};

const getRandomNum = (num) => {
    return Math.ceil(Math.random() * num);
}

const onCharacterBtnClick = () => {
    character.changeHP(getRandomNum(20));
};

const onEnemyBtnClick = () => {
    enemy.changeHP(getRandomNum(20));
};

const addClickListeners = () => {
    character.btn.addEventListener('click', onCharacterBtnClick);
    enemy.btn.addEventListener('click', onEnemyBtnClick);
}

const init = () => {
    character.renderHP();
    enemy.renderHP();
    addClickListeners();
};

function generateLog(firstPerson, secondPerson) {
    const {name, damageHP, defaultHP} = firstPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${secondPerson.name} , не помня себя от испуга, ударил в предплечье врага, - ${getRandomNum(20)}, ${defaultHP}/${damageHP}`,
        `${name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника, -${getRandomNum(20)}, ${defaultHP}/${damageHP}`,
        `${name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику, -${getRandomNum(20)}, ${defaultHP}/${damageHP}.`
    ];
    return logs[getRandomNum(logs.length) - 1]
}

init();

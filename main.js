const character = {
    name: `Picachu`,
    defaultHP: 100,
    damageHP: 100,
    btn: document.getElementById(`btn-kick-character`),
    elHP: document.getElementById(`health-character`),
    widthHP: document.getElementById(`progressbar-character`)
};

const enemy = {
    name: `Charmander`,
    defaultHP: 100,
    damageHP: 100,
    btn:document.getElementById(`btn-kick-enemy`),
    elHP: document.getElementById(`health-enemy`),
    widthHP: document.getElementById(`progressbar-enemy`)
};

const renderHPBar = (person) => {
    person.widthHP.style.width = `${person.damageHP} %`;
};

const renderHPLife = (person) => {
    person.elHP.innerText = `${person.defaultHP} / ${person.damageHP}`;
};

const renderHP = (person) => {
    renderHPLife(person);
    renderHPBar(person);
}

const ChangeHP = (count, person) => {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert(`${person.name} проиграл`);
        person.btn.setAttribute(`disabled`, `disabled`);
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
};

const getRandomNum = (num) => {
    return Math.ceil(Math.random() * num);
}

const onCharacterBtnClick = () => {
    ChangeHP(getRandomNum(20), character);
}

const onEnemyBtnClick = () => {
    ChangeHP(getRandomNum(30), enemy);
}

const addClickListeners = () => {
    character.btn.addEventListener('click', onCharacterBtnClick);
    enemy.btn.addEventListener('click', onEnemyBtnClick);
}

const init = () => {
    renderHP(character);
    renderHP(enemy);
    addClickListeners();
};


init();

const control0 = document.querySelector('.control');
const playground = document.querySelector('.playground');

export const createAttacksBtn = (item) => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = item.name;
    return btn;
}

export const createStartBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('start-button');
    btn.innerText = 'Start game';
    control0.appendChild(btn);
    return btn;
};

export const createResetBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('reset-button');
    btn.innerText = 'Reset game';
    playground.insertAdjacentElement('beforebegin', btn);
    return btn;
};

export const removeBtn = (btn) => {
    btn.remove();
};

export const removeAllBtns = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.remove();
    });
}

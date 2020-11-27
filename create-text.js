function createFightText(text) {
    const logs = document.querySelector('#logs');
    const p = document.createElement('p');
    for (let i = 0; i <= 10; i++) {
        p.innerText = text;
        logs.insertBefore(p, logs.children[0]);
    }
};

export default createFightText;
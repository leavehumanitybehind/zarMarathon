import createFightText from './create-text.js';
class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.widthHP = document.getElementById(`progressbar-${name}`);
        this.btn = document.getElementById(`btn-kick-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors }) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.renderHP();
    }
    renderHP = () => {
        this.renderHPLife();
        this.renderHPBar();
    };
    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;
        elHP.innerText = current + '/' + total;
    };
    renderHPBar = () => {
        const { widthHP, hp: { current, total } } = this;
        let percent = current / (total / 100);
        widthHP.style.width = percent + '%';
    };
    changeHP = (count, cb) => {
        const { name, btn} = this;
        this.hp.current -= count;
        if (this.hp.current <= 0) {
            this.hp.current = 0;
            alert(`${name} проиграл`);
            btn.setAttribute(`disabled`, `disabled`);
        }
        this.renderHP();
        cb && cb(count);
    };
}
export default Pokemon;

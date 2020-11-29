class Selectors {
    constructor(selectors) {
        this.elHP = document.getElementById(`health-${selectors}`);
        this.widthHP = document.getElementById(`progressbar-${selectors}`);
        this.image = document.getElementById(`img-${selectors}`);
        this.nameField = document.getElementById(`name-${selectors}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks = [], img}) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;

        this.renderHP();
        this.setImage();
        this.setName();
    }
    setName = () => {
        this.nameField.innerText = this.name;
    };
    setImage = () => {
this.image.src = this.img;
    };
    recoverHP = () => {
        const { elHP, widthHP, hp: { total } } = this;
        elHP.innerText = total + '/' + total;
        widthHP.style.width = 100 + '%';
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
        const { name, btn } = this;
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

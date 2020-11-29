
const countClicks = (count = 6, el) => {
        const innerText = el.innerText;
        el.innerText = `${innerText} (${count})`;
        return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`;
        return count;
    }
    }

export default countClicks;
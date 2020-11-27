const getRandomNum = (min, max) => {
    const num = max-min;
    return Math.ceil(Math.random() * num);
}

export default getRandomNum;
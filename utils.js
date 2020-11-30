export const getRandomNum = (max,min) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

export const getRandomArrayValue = (array) => {
const item = array[Math.floor(Math.random() * array.length)]; 
return item   
}


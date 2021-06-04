export function shuffle(arr){
    let currentIndex = arr.length;
    while(currentIndex !== 0){
        let temp , shuffleWithIndex;
        shuffleWithIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        temp = arr[currentIndex];
        arr[currentIndex] = arr[shuffleWithIndex];
        arr[shuffleWithIndex] = temp;
    }
    return arr; 
}

export function  checkTileMovability (index, grayItemIndex){
    let isMovable = false;
    switch(index){
        case 0: isMovable = [1,3].includes(grayItemIndex) ?  true: false;
        break;
        case 1: isMovable = [0,2,4].includes(grayItemIndex) ?  true: false;
        break;
        case 2: isMovable = [1,5].includes(grayItemIndex) ?  true: false;
        break;
        case 3: isMovable = [0,4,6].includes(grayItemIndex) ?  true: false;
        break;
        case 4: isMovable = [1,3,5,7].includes(grayItemIndex) ?  true: false;
        break;
        case 5: isMovable = [2,4,8].includes(grayItemIndex) ?  true: false;
        break;
        case 6: isMovable = [3,7].includes(grayItemIndex) ?  true: false;
        break;
        case 7: isMovable = [4,6,8].includes(grayItemIndex) ?  true: false;
        break;
        case 8: isMovable = [5,7].includes(grayItemIndex) ?  true: false;
        break;
    }
    return isMovable
}

export function formatTime(time){
    return Math.floor(time).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
}
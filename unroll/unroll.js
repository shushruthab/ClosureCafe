

const rightTraverse = (squareArray, resultArray) => {
    for (let i=0; i<squareArray[0].length; i++) {
        resultArray.push(squareArray[0][i]);
    }
    squareArray.shift();
    return squareArray;
}

const traverseDown = (rectangleArray, resultArray) => {
    let verticalIdx = rectangleArray.length - 1;
    let horizontalidx = rectangleArray[0].length - 1;
    for (let i=0; i<=verticalIdx; i++) {
        resultArray.push(rectangleArray[i][horizontalidx]);
        rectangleArray[i].pop();
    }
    return rectangleArray;
}

const leftTraverse = (squareArray, resultArray) => {
    const idx = squareArray.length - 1; 
    for (let i = idx; i > -1; i--) {
        resultArray.push(squareArray[idx][i]);
    }
    squareArray.pop();
    return squareArray;
}

const traverseUp = (rectangleArray, resultArray) => {
    let vIdx = rectangleArray.length - 1;

    for (let i=vIdx; i> -1; i--) {
        resultArray.push(rectangleArray[i][0]);
        rectangleArray[i].shift();
    }
    return rectangleArray;
}

function unroll(squareArray, resultArray=[]) {
    if (squareArray.length === 0) return resultArray;
    if (squareArray.length === 1) {
        resultArray.push(squareArray[0][0]);
        return resultArray;
        }
    

    squareArray = rightTraverse(squareArray, resultArray);
    squareArray = traverseDown(squareArray, resultArray);
    
    if (squareArray.length === 0) return resultArray;
    if (squareArray.length === 1) {
        resultArray.push(squareArray[0][0]);
        return resultArray;
    }

    squareArray = leftTraverse(squareArray, resultArray);
    squareArray = traverseUp(squareArray, resultArray);

    unroll(squareArray, resultArray);
    return resultArray;
}

module.exports = unroll;

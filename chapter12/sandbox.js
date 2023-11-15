
const score = [10, 11, 24, 45, 67, 89, 100, 23, 43];

for (let i = 0; i < score.length; i++){
    if (score[i] === 11) {
        continue;
    }
    if (score[i] === 100) {
        console.log('Congrats you got top score!!!!')
        break;
    }
    console.log('Your Score: ',score[i]);
}

//Please note that we can use Break and Continue only in loops.
//If we want to skip some operation we use continue
//Break causes to exity out of the loop
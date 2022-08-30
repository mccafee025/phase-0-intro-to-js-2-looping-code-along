function writeCards(a, b){
    let newArray = [];
    for(let i = 0; i < a.length; i++){
        newArray.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
    }
    return newArray;
}
function countDown(n){
    let i = n;
    while(i <= 10 && i >= 0){
        console.log(i--);
    }
}
countDown(10);


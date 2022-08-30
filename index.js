function writeCards(a, b){
    let newArray = [];
    for(let i = 0; i < a.length; i++){
        newArray.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
    }
    return newArray;
}
function countDown(n){
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}


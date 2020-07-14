function writeCards(names, occasion) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return cards
}

function countDown(number) {
    for (let i = number; i > -1; i--) {
        console.log(i)
    }
}
 


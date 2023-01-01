

// const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(gifts,text) {
  const newGift=[];
  for (let i = 0; i < gifts.length; i++) {
    newGift[i]=`Thank you, ${gifts[i]}, for the wonderful ${text} gift!`;
  }

  return newGift;
}

function countDown(number){
  let counter = 0;
  while (counter <= number) {
    console.log(number--);
  }
}




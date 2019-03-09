let inventory = {};
let sockPairs = 0;

ar.forEach(sock => {
  if (inventory[sock]) {
    inventory[sock] += 1;
  } else {
    inventory[sock] = 1;
  }

  let isEven = inventory[sock] % 2 === 0;
  if (isEven) {
    sockPairs++;
  }
});
return sockPairs;

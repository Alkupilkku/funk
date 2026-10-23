let inventory = [];
function findProductIndex(prod) {
  let cloned = prod.toLowerCase();
  const find = inventory.map(e => e.name).indexOf(cloned)
  return find
}

function addProduct(prod) {
  let small = prod.name.toLowerCase()
  let found = findProductIndex(small)
  if (found <= -1) {
    let item = {
      name: small,
      quantity: prod.quantity
    }
    inventory.push(item)
    console.log(`${prod.name.toLowerCase()} added to inventory`)
  }
  else {
    let index = inventory[found];
    index.quantity += prod.quantity
    console.log(`${prod.name.toLowerCase()} quantity updated`)
  }
}
function removeProduct(prod, amount) {
  let found = findProductIndex(prod)
  if (found <= -1) {
    console.log(`${prod.toLowerCase()} not found`)
  }
  else {
    let index = inventory[found];
    
      if (index.quantity < amount) {
      console.log(`Not enough ${index.name} available, remaining pieces: ${index.quantity}`)
    }else if (index.quantity >= amount){
    index.quantity -= amount;
    if (index.quantity == 0) {
      inventory.splice(found,1)
    }
    else if (found >= 0) {
      console.log(`Remaining ${index.name} pieces: ${index.quantity}`)
    }
  }
}
}

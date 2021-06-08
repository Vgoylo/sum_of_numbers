function fruitSalad (fruits){
  let chunks = [];

  fruits.forEach(fruit => {
    let middleSimbol = Math.floor(fruit.length / 2);
    
    chunks.push(fruit.substr(0, middleSimbol));
    chunks.push(fruit.substr(middleSimbol, fruit.length - 1));
  })
        
  let sortetChunks = chunks.sort();
  
  return sortetChunks.join('');
}


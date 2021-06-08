function fruitSalad (fruits){
    let chunks = [];

    for (i = 0; i < fruits.length; i += 1){

        let fruit = fruits [i];
        let middleSimbol = Math.floor(fruit.length / 2);
    

        chunks.push(fruit.substr(0, middleSimbol));
        chunks.push(fruit.substr(middleSimbol, fruit.length - 1));
    }
    
    let sortetChunks = chunks.sort();
    
    result = sortetChunks.join('');

    return result;
     
}
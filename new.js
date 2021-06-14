function  common (array1,array2){
  let result = [];
     
  array2.forEach(element => {
    if (array1.includes(element)){
      result.push(element)
    }
    
  });
  
    return result;

  }
  
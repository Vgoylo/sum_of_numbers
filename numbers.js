function numbersSum(number){

    let result = 0;

    
    for (let i = 0; i < number+1 ; i+=1){
       
        result +=i;
        
    }
 /*number.forEach(numbe => {
        result +=1;
    })*/

    return result;
    
}

/*let namber = [1,2,3,4,5,6,7,8,9]
 function sum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i +=1){
        let nam = numbers[i];
        sum += nam
    };
    return sum;
 }
console.log(sum(namber))*/

function middleSymbol(str){
    let result;
    let l = str.length;
    
    let whole = ~~(l/2);

    let tract = l % 2;
    if(tract == 0){
        result = str[whole -1] + str[whole];
    }else{
        result = str[whole];
    }
    return result;
    

}


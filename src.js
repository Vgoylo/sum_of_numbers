let namber = [1,2,3,4,5,6,7,8,9]
 function sum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i +=1){
        let nam = numbers[i];
        sum += nam
       // if ( nam % 2 == 0);
    };
    return sum;
 }
console.log(sum(namber))

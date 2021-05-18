// put your code here
let array1 = [1, 2, 6, 7, 10];
 function err (array1){
     for (let i = 0; i < array1.length; i+=1);
}
 console.log()


let erray2 = [3, 6, 10, 15];
 function  common (array1,array2){
 let result = [];
     for (let i = 0; i < array2.length; i+=1){
     let c = array2[i]
     if(array1.includes(c)){
         result.push(c)
        
     }
     return result;

 }
 }
 console.log()

=> [6, 10]



let erray = [1, 2, 6, 222, 7, 10]

    let sortNumbers = erray.filter(num =>{
        return num <= 9
    })
    console.log(sortNumbers)
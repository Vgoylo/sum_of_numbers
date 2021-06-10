function spaseApart(arr){
    let result;
    let sum = 0;
    let flag = false;

    arr.forEach(element => {
        
        if (element < 0){
            console.log(element)
            result = "invalid";
            return;
       
        } else {
            if(flag == true && element != '1'){
                sum += element;

            }
            if(element === '1'){
                flag = !flag;
            }
            
        }


    });

return result || sum;
}
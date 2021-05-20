function common(array1, array2){
    let l1 = array1.length;
    let l2 = array2.length;
    let big, small;
    let result = [];

    if (l1 > l2){
        big = array1;
        small = array2;
    }else{
        big = array2;
        small = array1;

    }

    for ( let i = 0; i < small.length; i+=1){
        let c = small[i];
        
        let x = big.includes(c);

        if(x){
            result.push(c);
        }
    }

    return result;
}

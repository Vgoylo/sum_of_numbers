function makingBox (n){
    let result = [];

    let str1 = '#'.repeat(n);
    let str2 = '#' + ' '.repeat(n-2) + '#';

    for(i = 0; i < n; i +=1){
        if(i == 0 || i == n - 1){
            result.push(str1);
        } else {
            result.push(str2);
        }

    } 
    return result;
}
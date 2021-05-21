

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


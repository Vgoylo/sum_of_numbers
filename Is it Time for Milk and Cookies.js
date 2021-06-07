function IsItTimeForMilkAndCookies(date){

    let result;
    
    let month = date.getMonth();//11
    
    let day = date.getDate();//24
    
    if (month == 11 && day == 24){
        result = true
    } else {
        result = false;
    }

    return result;
}
function leapYear(year){
    let result;
    if (year % 4 ==0){
        result = (year % 100 ==0) ? (year % 400 ==0) : true;

    } else {
        result = false;

    }
    return result;
};

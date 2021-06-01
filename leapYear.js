function leapYear(year){
    let result;
    if (year % 4 ==0){
        if (year % 100 ==0){
          result = year % 400 ==0
        } else {
            result = true;
        }

    } else {
        result = false;

    }
    return result;
};
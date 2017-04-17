function solution(number){
    var numerals = "";
    if (number < 11) {numerals = tenOrBelow(number);}
    else if (number < 101) {numerals = oneHundredOrBelow(number);}
    else if (number < 1001) {numerals = oneThousandOrBelow(number);}
    else {numerals = overOneThousand(number);}
    return numerals;
}

function overOneThousand(number) {
    var degree = parseInt(number/1000);
    if (degree == 1) {return "M" + oneThousandOrBelow(number - 1000);}
    else {return "M" + overOneThousand(number - 1000);}
}

function oneThousandOrBelow(number) {
    var degree = parseInt(number/100);
    if (degree == 0) {return oneHundredOrBelow(number);}
    else if (degree == 1) {return "C" + oneHundredOrBelow(number - 100);}
    else if (degree < 4) {return "C" + oneThousandOrBelow(number - 100);}
    else if (degree == 4) {return "CD" + oneHundredOrBelow(number - 400);}
    else if (degree == 5) {return "D" + oneHundredOrBelow(number - 500);}
    else if (degree < 9) {return "D" + oneThousandOrBelow(number - 500);}
    else if (degree == 9) {return "CM" + oneHundredOrBelow(number - 900);}
    else {return "M";}
}

function oneHundredOrBelow(number) {
    var degree = parseInt(number/10);
    if (degree == 0) {return tenOrBelow(number);}
    else if (degree == 1) {return "X" + tenOrBelow(number - 10);}
    else if (degree < 4) {return "X" + oneHundredOrBelow(number - 10);}
    else if (degree == 4) {return "XL" + tenOrBelow(number - 40);}
    else if (degree == 5) {return "L" + tenOrBelow(number - 50);}
    else if (degree < 9) {return "L" + oneHundredOrBelow(number - 50);}
    else if (degree == 9) {return "XC" + tenOrBelow(number - 90);}
    else {return "C";}
}

function tenOrBelow(number) {
    if (number == 0) {return "";}
    else if (number == 1) {return "I";}
    else if (number < 4) {return "I" + tenOrBelow(number - 1);}
    else if (number == 4) {return "IV";}
    else if (number == 5) {return "V";}
    else if (number < 9) {return "V" + tenOrBelow(number - 5);}
    else if (number == 9) {return "IX";}
    else {return "X";}
}
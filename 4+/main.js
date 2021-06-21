// преобразовать число в двоичную строку и вернуть кол-во единиц

var countBits = function(n) {
    // Program Me

    let str = (n >>> 0).toString(2);

    let result = str.match(/1/g);

    return result.length;


};


console.log(countBits(123132126));
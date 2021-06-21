
/*

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



 */



function filter_list(l) {
    // Return a new array with the strings filtered out

    let arr = [];

    l.forEach(function(elem) {


        if (Number.isInteger(elem)) {

            arr.push(elem);

        }
    });

    return arr;


}



console.log(filter_list([1,2,3,4]));

/*
BEST!

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

 */


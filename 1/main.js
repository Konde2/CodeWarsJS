// Удалить гласные из слова

function removeVowels( input ){

    return input.replace(/[aeiou]/gi, "");

    }

console.log(removeVowels("Hallo"));

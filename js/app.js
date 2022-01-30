//count repetitions of substring in string
const string = "HOLLYWOODEDENWOODHOLLYEDENGARDEN";
const substr = ['HOLLY', 'WOOD', 'EDEN', 'GARDEN'];

console.log('start operation');
console.log('given string: ', string);

//jeżeli liczba szukanych słów w tablicy substr jest nieznana
let sum_of_repetitions = 0;
let repets;

substr.forEach((el) => {    //z wykorzystaniem funkcji forEach
    repets = string.split(el).length-1;
    console.log(`number of repetition of the word ${el}: ` + repets);
    sum_of_repetitions += repets;
})

console.log('overall number of repetitions ', sum_of_repetitions);
console.log('end of operation');
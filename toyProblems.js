//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string) {
    // return string.reverse();
    let x = '';
    for(let i = string.length - 1; i >= 0; i--){
      x += string[i];
    }
    return x;
  },

  removeDups: function(array){
    let x = new Set(array);
    return Array.from(x);
  },

  titleIt: function(string) {
    let x = string.split(' ');
    let y = '';
    x.map((word, index, arr) => {
      arr[index] = word[0].toUpperCase() + word.slice(1);
    });
    return x.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(string){
    return string.toLowerCase().split('').reduce((sum, letter) => {
      if(letter === 'a' || letter === 'i' || letter === 'e' || letter === 'o' || letter === 'u') {
        return sum + 1;
      } else {
        return sum + 0;
      }
    }, 0);
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    if(num < 0 ) return false;
    for(let i = 2; i < num; i++){
      if (num % i === 0){
        return false;
      }
    }
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}

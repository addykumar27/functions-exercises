// TODO: add your solutions here!


function combineWords (a, b) {
	return (a+b);
}
combineWords("dog", "house")

function repeatPhrase (phrase,n) {
for (i = 0; i < n; i++) {
  console.log(phrase);
}
repeatPhrase( "Please come again!", 10)

function toTheNthPower(number, power) {
  var result = 1;
     for (var i = 0; i < power; i++) {
      result = result * number;
     }
     return result;
  }
toTheNthPower(4, 5);

 function circleArea(radius) {
   return (3.14 * radius * radius);
 }
circleArea(7);

function totalofPT(a,b) {
 return  Math.sqrt(a*a + b*b);
}
totalofPT(5,6);



function evenDivisbleBy(x,y) {
  if (x%y=== 0) {
    return true;
  } else {
    return false;
  }
}
evenDivisbleBy(105,3);

function countVowels(word) {
  var vowel = ["a","e","i","o","u"];
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < vowel.length; j++){
    if(word[i] === vowel[j]) {
      count = count + 1;
    }
  }
    return count;
}
countVowels("adarshna");


function findWdi(arr) {
	for (i=0; i < arr.length; i++) {
		 if (arr[i] === "wdi") {
		  return true;
	 }
}
return false;
}
findWdi(arr);


function findLongestWord(sentence) {

	var arr = sentence.split(" ");
	var maxLength = 0;
	var maxWord;

	for(var i=0; i<arr.length; i++) {
		if(arr[i].length > maxLength) {
			maxLength = arr[i].length;
			maxWord = arr[i];
		}
	}
	return maxWord;
}


findLongestWord(sentence);


function printTriangle(length) {
	for (i=0; i <
}

function addToZero(numArray){
    for (let i=0; i+1<=numArray.length;i++){
      for (let j=1; j<=numArray.length;j++){
        if (numArray[i]+numArray[j]==0){
          return true
        }
      }
    }
    return false
  }

  var numArray = [1,2,3,4,-4]

//O(n^2) quadratic time
//  console.log(addToZero(numArray))


function hasUniqueCharacters(word){
    var uniqueList = []
    for (let i=0;i<=word.length;i++){

        if (uniqueList.includes(word[i])){
            return false
        }
        else uniqueList.push(word[i])
    }
    return true
}  

////O(n) linear time
//console.log(hasUniqueCharacters("racecar"))
//console.log(hasUniqueCharacters("nope"))


function isPangram(phrase){
    var alphaList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    phrase = phrase.toLowerCase()
    for (let i=0;i<=phrase.length;i++){
        if(alphaList.includes(phrase[i])){
            var index = alphaList.indexOf(phrase[i])
            alphaList.splice(index,1)
        }
    }
    if(alphaList.length ==0 ){
        return true
    }
    else
    {
        return false
    }
}

//O(n^2) quadratic time
//console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
//console.log(isPangram("I like cats, but not mice"));


function longestWord(wordArr){
    longestLength = 0
    for (let i=0; i<wordArr.length;i++)
    {   
        wordLength = wordArr[i].length
        if(wordLength> longestLength){
            longestLength = wordLength
        }
    }
    return longestLength
}

////O(n) linear time
//console.log(longestWord(["hi", "hello", "goodbye", "nope"]));
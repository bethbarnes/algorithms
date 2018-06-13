// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

indexOf('or', 'world'); // should return 1
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6


function indexOf(needle, haystack){
  for(let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++){
    for(let nIdx = 0; nIdx < needle.length; nIdx++){
      if(haystack[hIdx + nIdx] !== needle[nIdx]) break
      if(nIdx + 1 === needle.length) return hIdx
    }
  }
  return -1
}

function indexOf(needle, haystack){
  for(let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++){
   if(haystack.slice(hIdx, hIdx + needle.length)=== needle) return hIdx
  }
  return -1
}

//-----------STEP BY STEP WALKTHROUGH--------//

// 1) We're going to iterate over the haystack, and only need to go as far as hay - needle length because, any further than that and there aren't enough characters to contain needle, so can't possibly be there
//needle length is 2
//haystack length is 5
//we only go to index 3

// 2) For each index in the haystack, we want to iterate over the next needle.length characters so we can check if that group of characters is equal to needle

// 3) To do this, we check if haystack at the current index in the outer loop plus the current index in the inner loop is equal to needle at the current index in the inner loop.

// If it is not, we know that group of characters in haystack is not equal to needle, so we exit the inner loop and evaluate the group of characters at the next index in haystack.

//If it is equal, we keep looping until another character is unequal, or we finish the inner loop.

//We can tell we've finished the inner loop by checking if the current nIdx + 1 is equal to needle.length. If we reach that index without breaking the previous if, we know we found a match and we return that haystack Index

//4) If we finish the outer loop without having found a match, we know it does not exist and we return -1

//ANOTHER APPROACH
//if(haystack.slice(hIdx, hIdx + needle.length)=== needle) return hIdx
// slice is a linear operation O(N) so using one for loop and slice actually doesn't change time complex, but may change space complex, because have to store a new instance of string - space is O(N) needle

//also interviewer may say you can't use slice

//------------ BIG O ANALYSIS------------//

function indexOf(needle, haystack){
  for(let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++){ //O(H) where H is length of haystack
    for(let nIdx = 0; nIdx < needle.length; nIdx++){ // O(N) where N is length of needle
      if(haystack[hIdx + nIdx] !== needle[nIdx]) break // O(1)
      if(nIdx + 1 === needle.length) return hIdx // O(1)
    }
  }
  return -1 // O(1)
}

//

// Time complexity : O(N*M)
// IF A LOOP IS NESTED, WE MULTIPLY THEIR TIME COMPLEXITY
// Space complexity : O(1)

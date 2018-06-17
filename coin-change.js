// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// *


function changePossibilities(targetSum, coins){
  let waysCount = new Array(targetSum+1).fill(0)
  //we create an array that will hold counters of how many ways we can add the coins to make each number from 0 to targetSum
  waysCount[0] = 1
  //the counter for 0 is one, because there is always one way to make 0 (by using no coins)
  coins.forEach(coin => {
    //for each coin, we iterate over all numbers from 1 to targetSum and see if the coin can go into that number
    for(let num = 1; num <= targetSum; num++){
      //if the coin is less than or equal to the number, we know we may be able to use that coin to add up to that number
      if(coin <= num){
        waysCount[num] += waysCount[num-coin]
        //we check how many ways we can make the number at num-coin, and add that to the count for the current num
      }
    }
  })
  return waysCount[targetSum]
}

changePossibilities(4,[1,2,3])

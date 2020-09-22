// Write a function, lucasNumberMemo(n), that takes in a number. The function
// should return the n-th number of the Lucas Sequence.
//
// The Lucas Sequence is like the Fibonacci Sequence, except that its two seed
// values are:
//   The 0-th number of the Lucas Sequence is 2.
//   The 1-st number of the Lucas Sequence is 1.
//
// To generate the next number of the sequence, you add up the previous two
// numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    // if (memo[n] !== null) {
    //     return memo[n];
    // }
    if (n in memo) return memo[n];
 
    if (n === 0) {
        return 2;
    }
    if (n === 1) {
        return 1;
    }

    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo)
    return memo[n]
};
// console.log(lucasNumberMemo(1000))

// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
//
// quarter = 25
// dime = 10
// nickel = 5
// penny = 1
/*
let h = [1, 6, 9, 3, 21, 4, 1, 2]
let maxH = -1;
for (let i = 0; i < h.length; i++) {
    if (maxH < h[i]) {
        maxH = h[i];
    }
}

Math.max(h)
*/

/* Cashier Style */
`function minChange(coins,amount){
  if (amount === 0) return 0
  let minWays = Infinity
  for (let i=0; i<coins.length;i++){
    if(coins[i] <= amount){
      let count = minChange(coins, amount - coins[i]);
      if (count != Infinity && count + 1 < minWays){
        minWays = count + 1
      }
    }
  }
  return minWays
}`

function minChange(coins, amount, memo={}){
if (amount in memo) return memo[account];
if (amount === 0) return 0;

let numCoins = [];
coins.forEach((coin) => {
    if (coin <= amount) {
        numCoins.push(minChange(coins, amount - coin) + 1)
    }
});
    memo[amount] = Math.min(...numCoins);
    return memo[account];

 }






module.exports = {
    lucasNumberMemo,
    minChange
}; 

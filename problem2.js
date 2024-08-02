/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let left = 0; //buy
    let right = 1; //sell
    let profit = 0;
    while(right< prices.length){
        if(prices[left] < prices[right]){
            let curr_profit = prices[right] - prices[left]
            profit = Math.max(curr_profit, profit)
        }else{
            left = right
        }
        right ++
    }
    return profit
};
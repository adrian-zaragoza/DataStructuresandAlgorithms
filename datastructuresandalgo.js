
// 1021. Remove Outermost Parentheses
var removeOuterParentheses = function (s) {
  let stack = [];
  let resultString = '';
  let currentChar;
  let i = 0;

  while (i < s.length) {
    currentChar = s[i];

    if (currentChar === ")") {
      stack.pop()
    };
    if (stack.length != 0) {
      resultString += currentChar
    };
    if (currentChar === "(") {
      stack.push("(");
    };

    i += 1;
  };

  return resultString;
};

// 1475. Final Prices With a Special Discount in a Shop
var finalPrices = function(prices) {
    let stack = [];
    let resultPrices = prices.slice();
    
    for(let i = 0; i < prices.length; i++){
        let price = prices[i];
        
        while(stack.length > 0 && price <= prices[stack[stack.length - 1]]){
            let index = stack.pop();
            resultPrices[index] = prices[index] - price;
        }
        
        stack.push(i);
    }
    
    return resultPrices;
};
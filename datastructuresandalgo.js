
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


// 1047. Remove All Adjacent Duplicates In String
var removeDuplicates = function(s) {
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(stack[stack.length - 1] == s[i]){
            stack.pop();
        }else{
            stack.push(s[i]);
        };
    };
    
    return stack.join("");
};

// 1441. Build an Array With Stack Operations
var buildArray = function(target, n) {
    stack = [];
    resultArr = [];
    
    let index = 0;
    
    for(let j = 1; j <= n; j++){
        resultArr.push("Push")
        
        if(target[index] === j){
            stack.push(index)
            index += 1;
        }else{
            resultArr.push("Pop")
        }
        
        if(stack.length === target.length){
            break;
        };
    };
    
    return resultArr;

    
    
};

// 682. Baseball Game
var calPoints = function(ops) {
    let stack = [];
    let sum = 0;
    
    for(let i = 0; i < ops.length; i++){
        let ele = ops[i];
        let newScore;
        
        if(Number(ops[i]) || ops[i] === "0"){
            newScore = Number(ele);
            stack.push(newScore);
        }else if(ele === "+"){
            newScore = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(newScore);
        }else if(ele === "D"){
            newScore = stack[stack.length - 1] * 2;
            stack.push(newScore);
        }else{
            newScore = stack.pop() * -1;
        };
        
        sum += newScore;
    };
    
    return sum;
};
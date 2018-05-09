function maxProfit(input){
  var bought = 0;
  var selling = 0;
  var profit = -1;
  for(var i = 0; i < input.length; i++){
    for(var ii = i+1; ii < input.length; ii++){
      var temp = input[ii] - input[i];
      if(temp > profit && temp > 0){
        bought = input[i];
        selling = input[ii];
        profit = temp;
      }
    }
  }
  return profit;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
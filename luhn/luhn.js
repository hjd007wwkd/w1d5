function check(values) {
  var value = values.toString().split("").reverse();
  var sum = 0;
  for(var i = 0; i < values.toString().length; i++){
    value[i] = Number(value[i]);
    if(i % 2 !== 0){
      value[i] = value[i]*2;
      if(value[i] >= 10) {
        var num = value[i].toString().split("");
        value[i] = Number(num[0]) + Number(num[1]);
      }
    }
    sum += value[i];
  }
  if(sum % 10 === 0){
    return true;
  } else {
    return false;
  }
}

console.log(check(79927398713));
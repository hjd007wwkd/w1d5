var num = [];

module.exports = {
  storeNum: function(number){
    num.push(number);
  },
  sortList: function(){
    return num.sort(function(a, b){
      return a - b;
    })
  }
}
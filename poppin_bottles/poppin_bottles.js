var args = Number(process.argv[2])

function popBottles(invest){
  var total = Math.floor(invest / 2);;
  var totalempty = 0;
  var totalcaps = 0;
  var empty = total;
  var caps = total;

  while(true){
    if(empty < 2 && caps < 4){
      break
    }

    if(empty >= 2){
      empty -= 2;
      total++
      totalempty++
      empty++
      caps++
    }
    if(caps >= 4) {
      caps -= 4;
      total++
      totalcaps++
      empty++
      caps++
    }
  }

  return "TOTAL BOTTLES: "+total
        +"\nREMAINING BOTTLES: "+empty
        +"\nREMAINING CAPS: "+caps
        +"\nTOTAL EARNED:\n  BOTTLES: "+totalempty
        +"\n  CAPS: "+totalcaps
}

console.log(popBottles(args));
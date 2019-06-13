var final = 0;
var int1;
var int2 = 1;
var max = 4000000;

for (var current = 1; current < max; current = int1+int2){
int1 = current;
int2 = current + int2;
// console.log("current: " + current);
// console.log("int1: " + int1);
// console.log("int2: " + int2);
// console.log("final: " + final);
  if (current % 2 === 0) {
    final += current;
  } else if (int2 % 2 === 0){
    final += int2;
  }
}

alert(final);

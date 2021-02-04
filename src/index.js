let sum = 0;

for (let i = 0; i < 10; i++) {
  let rnd = Math.floor(Math.random() * (100 - 1)) + 1;
  if (Math.random() > 0.3) {
    rnd *= 10;
  }
  if (Math.random() > 0.6) {
    rnd *= 10;
  }
  console.log(rnd);
  sum += rnd;
}
console.log("sum " + sum);

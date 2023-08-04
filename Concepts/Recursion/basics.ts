function callMe(n: number) {
  if (n == 0) return;

  console.log("BEFORE - ", n);
  callMe(n - 1);
  console.log("AFTER - ", n)
}

function recursion(m:number){
    callMe(m)
}

recursion(5);





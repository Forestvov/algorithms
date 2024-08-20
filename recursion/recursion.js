function factorial(number) {
  if (number < 2) {
    return 1;
  } else {
    return factorial(number - 1) * number;
  }
}

function countdown(time) {
  if (time) {
    console.log(".." + time);
    return countdown(time - 1);
  } else {
    return "..0";
  }
}

console.log(factorial(5));
console.log("------");
console.log(countdown(10));

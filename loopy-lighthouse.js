for (let num = 100; num <= 200; num++) {
  let message = "";
  if (num % 3 === 0) {
    message = "Loopy";
  }
  if (num % 4 === 0) {
    message += "Lighthouse";
  }
  console.log(message || num);
}

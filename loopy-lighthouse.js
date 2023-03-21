function loopyLighthouse(range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    let message = "";
    if (num % multiples[0] === 0) {
      message = words[0];
    }
    if (num % multiples[1] === 0) {
      message += words[1];
    }
    console.log(message || num);
  }
}

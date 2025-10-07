function toCase(text) {
  // write your code here
  let lcase = text.toLowerCase();
  let ucase = text.toUpperCase();
  return `${lcase}-${ucase}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

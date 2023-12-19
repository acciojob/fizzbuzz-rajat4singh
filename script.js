//your JS code here. If required.
var output = "";

for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    output += "FizzBuzz";
  } else if (i % 3 === 0) {
    output += "Fizz";
  } else if (i % 5 === 0) {
    output += "Buzz";
  } else {
    output += i.toString();
  }

  // Add a newline character after each number/string
  output += "\n";
}

// Display the output using alert()
alert(output);

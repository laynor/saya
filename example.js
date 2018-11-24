function readNumber() {
  return parseInt(readline());
}

// write("What's your name? ");
// var name = readline();

// if (name == "Alessandro") {
//   print("Your name is Alessandro");
// } else {
//   print("Your name is not Alessandro");
// }


var finished = false;

write("Choose +,-,/,* (q to exit): ");
while (!finished) {
  var opt = readline();

  if (opt == "q") {
    print("Bye.");
    finished = true;
  } else {
    write("Enter the first number (x): ");
    var x = readNumber();
    write("Enter the second number (y): ");
    var y = readNumber();
    var res;
    if (opt == "+") {
      res = x + y;
    } else if (opt == "-") {
      res = x - y;
    } else if (opt == "*") {
      res = x * y;
    } else if (opt == "/") {
      res = x / y;
    }

    print("x " + opt + " y = " + res);

    write("Choose +,-,/,* (q to exit): ");
  }
}
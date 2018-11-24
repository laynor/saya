function readNumber() {
  return parseInt(readline());
}

var finished = false;


while (!finished) {
  write("choice + / * -: Press Q if you wanna exit! ");
  var choice = readline();

  if (choice == "Q"){
    print("the program is finiched, see ya")
    finished = true;
  } else {


    write("Write a number that you want: ");
    var n = readNumber();


    write("Write another number that you want: ");
    var b = readNumber();

    var result;
    if (choice == "+") {
      result = n + b;
    } else if (choice == "-" ) {
      result = n - b;
    } else if (choice == "*") {
      result = n * b;
    } else {
      result = n / b;
    }

    print("The answer is " + result);

  }

}

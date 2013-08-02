/*
 * while
 * for
 * if
 * function
 * switch
 * var
 */

/* Expected output:
 * ----------------
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 */
for(var i = 1; i <= 10; i++) {
  print(i);
}
/* Expected output:
 * ----------------
 * 1 2 3 4 5 6 7 8 9 10
 *
 */
for(var i = 1; i <= 10; i++) {
  write(i + " ");
}
print();

/*
 * Expected output:
 * ----------------
 * 1 2 3 4
 * 1 2 3 4
 * 1 2 3 4
 * 1 2 3 4
 */
print();

for(var j=0; j < 4; j++) {
  for(var i = 1; i <= 4; i++){
    write(i + " ");
  }
  print();
}

print();

/*
 * Write a function
 *   foo_1(m, n)
 * that prints a row long m characters separated by spaces.
 * The character at position n should be '1', the other characters should be 0
 *
 * Expected output:
 * ----------------
 * foo_1(4, 2) => 0 0 1 0
 * foo_1(5, 0) => 1 0 0 0 0
 * foo_1(6, 5) => 0 0 0 0 0 1
 *
 */

function foo_1(m, n) {
  //TODO

}

foo_1(4, 2);
print();

foo_1(5, 0);
print();

foo_1(6, 5);
print();

function hello() {
  print("Hello Saya!")
}

function hello2(name) {
  print("Hello " + name + "!");
}

hello();

hello2("Saya"); /* Hello Saya! */
hello2("Giovanni"); /* Hello Giovanni! */
hello2("Ale"); /* Hello Ale! */
import _ from "lodash";
import { Greeter } from "./greeter.js";
import { values } from "./module.js";
import printValuesFromModule from "./module.js";
import * as moduleValues from "./module.js";

/**
 *
 * I. Scope
 *
 * A variable has a lifespan, and a well defined scope
 *
 */

const a = () => {
  console.log("-- Scope --");

  const foo = 1;
  if (true) {
    // opening a "code block"
    const bar = 2;
    console.log(foo);
    console.log(bar);
  } // closing it, end of lexical scope
  console.log(foo);
  // console.log(bar); // Expected output: ReferenceError: a is not defined (uncomment this line to reproduce the error)
};

/**
 *
 * II. Semantic
 *
 * Semantic: semantic data structures used to model your data
 *
 * II-1. Arrays
 *
 * They are used to group similar data, on which we can iterate.
 * Elements exposing similar interfaces.
 *
 */

const b = () => {
  console.log("-- Semantic - Arrays --");

  const array = [];
  const array2 = [0, 1, 2, 3, 4, 5];

  console.log("Value at index 0 in array2: ", array2[0]);

  const array3 = [1, "Hello", {}, () => {}];

  // Only logic operation to do on a heterogeneous array
  console.log("Content of array3: ");
  for (const val of array3) {
    console.log(val);
  }

  // Array of objects
  const array4 = [{ a: 1 }, { a: 2 }];

  console.log("Content of array4: ");
  for (const val of array4) {
    console.log(val.a);
  }
};

/**
 *
 * II-2. Objects: used to link entities describing a larger entity
 *
 * Define something by the sum of its part.
 *
 */

const c = () => {
  console.log("-- Semantic - Objects --");

  const object1 = { a: 1 }; // a is key, and 1 is the value associated to this key
  const john = {
    promotion: "IMAC2022",
    name: "Doe",
    surname: "John",
  };
  const object2 = {
    a: {
      b: {
        c: 1,
      },
    },
  };
  const guitar = {
    chords: ["E", "A", "D", "G", "B", "E"],
    size: 120,
    brand: "Fender",
  };
  const clickableButton = {
    text: "I am a button",
    onClick: () => console.log("I was clicked"),
  };

  clickableButton.onClick();
};

/**
 *
 * III. Functions
 *
 */

const d = () => {
  console.log("-- Functions --");

  /**
   *
   * III-1. Arrow functions
   *
   * Shorter syntax to define functions (use it).
   *
   */

  const incrementWithExplicitReturnStatement = (x) => {
    return x + 1;
  };

  // Implicit return statement:
  // When there are no brackets, we can have an implicit return statement.
  const incrementWithImplicitReturnStatement = (x) => x + 1;

  /**
   *
   * III-2. Functions as first class members
   *
   */

  const askServerToUpdateName = async (nameToUpdate) => {
    console.log("Updating name ...");
  };

  const increment = (x) => x + 1;

  const updateName = (name) => {
    askServerToUpdateName(name).then(() => {
      console.log("success!");
    });
  };

  // We can assign function to variables
  const callOnNumber = (f, number) => f(number);

  updateName("Doe");
  console.log(callOnNumber((x) => x + 2, 3));
};

/**
 *
 * IV. Classes
 *
 */

class Thing {
  constructor(x = 0) {
    this.x = x;
  }

  add42ToX() {
    this.x += 42;
  }
}

const e = () => {
  console.log("-- Classes --");

  const thing = new Thing();
  console.log("x of Thing object: ", thing.x);
  thing.add42ToX();
  console.log("x of Thing object after calling 'add42ToX()': ", thing.x);
};

/**
 *
 * V. Context
 *
 * What you know, what you can access, without needing
 * to think about it. It's there, passively.
 * What is implicit.
 * Goal: make you all understand that programming is
 * mostly about 'communication" and semantics.
 * Or the scary keyword: this.
 * "this" refers to the current context, where it is called.
 *
 */

class A {
  doAThing = () => {
    this.value = 3;
  };
  printContext = () => {
    this.doAThing();
    console.log(this);
  };
}

const f = () => {
  console.log("-- Context --");

  new A().printContext();
};

/**
 *
 * VI. Funny behaviour
 *
 */

const g = () => {
  console.log("-- Funny behaviour --");

  console.log("1 + 1 = ", 1 + 1);
  console.log("'1' + 1 = ", "1" + 1);
  console.log("'1' - 1 = ", "1" - 1);
  console.log("[] + {} = ", [] + {});
  console.log("{}.toString() = ", {}.toString());
  console.log("{} + [] = ", {} + []);
  console.log("[] - {} = ", [] - {});
  console.log("{} - [] = ", {} - []);
};

/**
 *
 * VII. Equality
 *
 */

const h = () => {
  console.log("-- Equality --");

  const obj = {};

  // Equality only on objects/arrays reference
  console.log("obj === obj: ", obj === obj); // Same reference
  console.log("{} === {}: ", {} === {}); // Not the same reference

  // Always use "===" (because there is no type conversion)
  console.log("1 == 1: ", 1 == 1);
  console.log("1 === 1: ", 1 === 1);
  console.log("1 == '1'", 1 == "1");
  console.log("1 === '1'", 1 === "1");
};

/**
 *
 * VIII. Modules
 *
 * Split codes into logical and semantically similar units.
 * Expose and API (interface) to the rest of the code and hide the implementation.
 * Import system for usage of packaged code.
 * Export system to import in the rest of your codebase or other projects.
 *
 */

const i = () => {
  console.log("-- Modules --");
  console.log(
    "-- Small example with lodash library and Greeter custom module --"
  );
  // Use of lodash library and greeter module
  const name = "john";
  const person = new Greeter(_.capitalize(name));
  console.log(person.greet());
  console.log("-- Small example with custom values module --");
  console.log(printValuesFromModule());
  console.log(v);
  console.log(moduleValues);
};

/**
 *
 * IX. Lodash examples
 *
 * IX-1. First scenario
 *
 * You have two separate arrays
 * with different ingredients in each and want to know which
 * ones come up in both.
 *
 */

const j = () => {
  console.log("-- Lodash - First example --");
  console.log("-- Which entries come up in two seperate arrays --");

  // Two arrays with some common entries
  const array1 = ["corn", "hotdog", "lettuce", "tomato", "peanut"];
  const array2 = ["cucumber", "blueberry", "peanut", "cake", "hotdog"];

  // Vanilla JavaScript version
  let commonResults = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) !== -1) {
      let indexPosition = array2.indexOf(array1[i]);
      commonResults.push(array2[indexPosition]);
    }
  }

  console.log("Result with Vanilla JavaScript: ", commonResults);

  // Lodash one-line version
  console.log("Result with lodash: ", _.intersection(array1, array2));
};

/**
 *
 * IX-2. Second scenario
 *
 * You want to get a specific index for student object
 * that fits certain criteria from an array of objects.
 *
 */

const k = () => {
  console.log("-- Lodash - Second example --");
  console.log(
    "-- Get a specific index for an object that fits certain criteria from an array of objects --"
  );

  const students = [
    { name: "eric", class: 1, avgGrade: 15.7 },
    { name: "john", class: 3, avgGrade: 11.8 },
    { name: "julie", class: 5, avgGrade: 12.3 },
    { name: "sofia", class: 3, avgGrade: 13.4 },
  ];

  // Vanilla JavaScript version
  for (let i = 0; i < students.length; i++) {
    if (students[i].class === 3 && students[i].avgGrade === 13.4) {
      console.log("Result with Vanilla JavaScript: ", i);
    }
  }

  // Lodash one-line version
  console.log(
    "Result with lodash: ",
    _.findIndex(students, { class: 3, avgGrade: 13.4 })
  );
};

/**
 *
 * X. Declarative/Functional programming
 *
 * X-1. Ternary operator
 *
 */

const l = () => {
  console.log("-- Ternary operator --");

  // Classic approach
  let a;
  if (true) a = 2;
  else a = 3;

  // Using ternary operator
  const name = "Vincent";
  const emptyState = "Guest";
  let userIsConnected = true;
  let uiName = userIsConnected ? name : emptyState;
  console.log("The user is connected: " + uiName);
  uiName = false ? name : emptyState;
  console.log("The user is not connected: " + uiName);
};

/**
 *
 * X-2. Nullish coalescing
 *
 * The nullish coalescing operator (??) is a logical operator
 * that returns its right-hand side operand when its left-hand side operand is null or undefined,
 * and otherwise returns its left-hand side operand.
 *
 * This can be contrasted with the logical OR (||) operator,
 * which returns the right-hand side operand if the left operand is any falsy value,
 * not only null or undefined. In other words, if you use || to provide some default value to another variable foo,
 * you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.
 *
 */

const m = () => {
  console.log("-- Nullish coalescing --");

  const calculatePrice = (price, taxes, description) => {
    if (taxes == null) taxes = 0.05;
    taxes = taxes ?? 0.05;
    description = description ?? "Default item";
    const total = price * (1 + taxes);
    console.log(`${description} with tax: ${total}`);
  };

  calculatePrice(100, 0.07, "My item"); // Expected output: My item with tax: 107
  calculatePrice(100, 0, "My other item"); // Expected output: My other item with tax: 100
  calculatePrice(100, undefined, ""); // Expected output:   with tax: 105
};

/**
 *
 * X-3. Accessing a nested element
 *
 */

const n = () => {
  console.log("-- Accessing a nested element --");

  const obj = {
    a: {
      b: {
        c: 1,
      },
    },
  };

  console.log(obj.a && obj.a.b && obj.a.b.c); // Expected output: 1
  console.log(obj.a && obj.a.b && obj.a.b.c && obj.a.b.c.d); // Expected output: undefined
};

/**
 *
 * XI. Immutability
 *
 * Allows you to limit unexpected behaviour.
 *
 */

const o = () => {
  // console.log("-- Immutability --");

  const a = 1;

  // The following with throw an error after 3s
  // setTimeout(() => {
  //   a = "item";
  // }, 3000);
};

/**
 *
 * XII. Operations and collections
 *
 * XII-1. Concatenation
 *
 */

const p = () => {
  console.log("-- Concatenation --");

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  // The following will not modify arr1, but will create a new array
  arr1.concat(arr2);

  // Using spread syntax:
  // Spread syntax (...) allows an iterable such as an array expression or string to be expanded
  // in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object
  // expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
  const arr3 = [...arr1, ...arr2];
  console.log(arr3);
};

/**
 *
 * XII-1. Map
 *
 * The map() method creates a new array populated with the results of calling
 * a provided function on every element in the calling array.
 *
 */

const q = () => {
  console.log("-- Map --");

  const guitar = {
    chords: ["E", "A", "D", "G", "B", "E"],
    size: 120,
    brand: "Fender",
  };

  const ukulele = {
    chords: ["G", "C", "E", "A"],
    size: 60,
    brand: "Lag",
  };

  const instruments = [guitar, ukulele];

  console.log(instruments.map((i) => i.size)); // Expected output: [120, 60]
};

/**
 *
 * XII-2. Reduce
 *
 * The reduce() method executes a reducer function (that you provide)
 * on each element of the array, resulting in single output value.
 *
 */

const r = () => {
  console.log("-- Reduce --");

  const grades = [9, 12, 15, 11, 10, 10.5, 20];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const sum = (numbers) => numbers.reduce(reducer, 0);

  const average = (ints) => sum(ints) / ints.length;

  console.log(average(grades)); // Expected output: 12.5
};

/**
 *
 * XII-3. Filter
 *
 * The filter() method creates a new array with all elements
 * that pass the test implemented by the provided function.
 *
 */

const s = () => {
  console.log("-- Filter --");

  const guitar = {
    chords: ["E", "A", "D", "G", "B", "E"],
    size: 120,
    brand: "Fender",
  };

  const ukulele = {
    chords: ["G", "C", "E", "A"],
    size: 60,
    brand: "Lag",
  };

  const instruments = [guitar, ukulele];

  const instrumentsWith4Chords = instruments.filter(
    (i) => i.chords.length === 4
  );

  console.log(instrumentsWith4Chords); // Expected output: [ ukulele ]
};

/**
 *
 * XII-4. Find
 *
 * The find() method returns the value of the first element
 * in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 *
 */

const t = () => {
  console.log("-- Find --");

  const guitar = {
    chords: ["E", "A", "D", "G", "B", "E"],
    size: 120,
    brand: "Fender",
  };

  const ukulele = {
    chords: ["G", "C", "E", "A"],
    size: 60,
    brand: "Lag",
  };

  const instruments = [guitar, ukulele];

  const maybeInstrumentWith6Chords = instruments.find(
    (i) => i.chords.length === 6
  );
  console.log(maybeInstrumentWith6Chords); // Expected output: guitar

  const maybeInstrumentWith5Chords = instruments.find(
    (i) => i.chords.length === 5
  );
  console.log(maybeInstrumentWith5Chords); // Expected output: undefined
};

/**
 *
 * XII-5. Slice
 *
 * The slice() method returns a shallow copy of a portion of an array
 * into a new array object selected from start to end (end not included) where start
 * and end represent the index of items in that array. The original array will not be modified.
 *
 */

const u = () => {
  console.log("-- Slice --");

  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  console.log(animals.slice(2)); // Expected output: ["camel", "duck", "elephant"]

  console.log(animals.slice(2, 4)); // Expected output: ["camel", "duck"]

  console.log(animals.slice(1, 5)); // Expected output: ["bison", "camel", "duck", "elephant"]
};

/**
 *
 * XIII. Currying
 *
 * Currying is the process of transforming a function that takes
 * multiple arguments into a function that takes just a single argument and
 * returns another function if any arguments are still needed.
 *
 */

const v = () => {
  console.log("-- Currying --");

  const curry = (fn, arity = fn.length, ...args) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
  console.log(curry(Math.pow)(2)(8)); // Expected output: 256
  console.log(curry(Math.min, 3)(10)(50)(2)); // Expected output: 2
};

const app = () => {
  console.log("-- Web development (IMAC2) - Lecture --");

  a();
  b();
  c();
  d();
  e();
  f();
  g();
  h();
  i();
  j();
  k();
  l();
  m();
  n();
  o();
  p();
  q();
  r();
  s();
  t();
  u();
  v();
};

app();

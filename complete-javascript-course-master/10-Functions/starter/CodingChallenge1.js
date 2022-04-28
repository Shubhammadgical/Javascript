const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Answer
    const Answer = Number(
      prompt(
        `${poll.question}\n${this.options.join('\n')}\n(Write option number).`
      )
    );
    console.log(Answer);

    //Register answer
    typeof Answer === 'number' &&
      Answer < this.answers.length &&
      this.answers[Answer]++;

    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [4, 5, 6] }, 'string');
poll.displayResult.call({ answers: [1, 3, 5, 7, 9] }, 'string');
poll.displayResult.call({ answers: [4, 7, 9, 2, 4, 1] });

//136 : Immediately Invoked Function Expressions
(function () {
  console.log('This will never run again');
})();

(() => console.log('This ALSO nevwr run again'))();

//137 : Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();

console.dir(booker);

//138 : Clousers Examples
//1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);

//Re-assigning
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
h();
f();
console.dir(f);

//2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

const rest = new Map();
rest.set('name', 'Royal');
rest.set(1, 'Firenze, Italy');
rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open : D')
  .set(false, 'we are closed: (');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
rest.delete(1);
console.log(rest);
console.log(rest.size);
//rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get('correct') === answer);

console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

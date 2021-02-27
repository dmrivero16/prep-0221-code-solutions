var person = {
  firstName: 'Ana',
  lastName: 'Landicho',
  hobby: 'Baking'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Teacher';
console.log("The person's current job is:", person.job);

person.previousJob = 'Cleaner';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Honda',
  model: 'Civic',
  year: '2015'
};
console.log('Car information\n', myCar);

myCar['owner'] = fullName;
console.log('My name is', myCar['owner'], 'and I drive a', myCar['year'], myCar['make'], myCar['model']);

myCar['color'] = 'black';
console.log('My full car info:', myCar);

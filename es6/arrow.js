
//arrow function

const func = () => ({ x: 1 });

console.log(func());

let name = 'doe';

const nameMe = () => {
  name = 'romeo';

  return name;
}

console.log(name);
console.log(nameMe());

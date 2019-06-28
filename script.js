  let age = 100;

  let age2 = age;

  console.log(age, age2);

  age = 200;

  console.log(age, age2);

  let name = 'Lou';

  let name2 = name;

  console.log(name, name2);

  name = 'wesley';

  console.log(name, name2);


const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

team[3] = 'Lux';

console.log(team);
console.log(players);

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'heee haww';

const team5 = Array.from(players);



const person = {
  name: 'Wes Bos',
  age: 80
};

// const captain = person;
// captain.number = 99;

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
// only in React;
// const cap3 = {...person};

const lou = {
  name: 'lou',
  age: 2019,
  social: {
    twitter: '@lou',
    facebook: 'ls'
  }
}

console.log(lou);


const dev = Object.assign({}, lou);

const dev2 = JSON.parse(JSON.stringify(lou));

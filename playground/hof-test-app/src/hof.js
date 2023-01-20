// const apply1 = (f) => f(1);
// const add2 = (a) => a + 2;
// console.log(apply1(add2));

const times = (f, n) => {
  let i = -1;
  while (i++ < n) f(i);
};

// times(console.log, 3);

// times((a) => console.log(a + 10), 3);

const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(5));

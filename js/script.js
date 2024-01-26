//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// console.log(fruts.map((mas, item) => (mas = mas.name)));

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let item of mas) {
//   if (item % 2 === 0) console.log(item);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 0;

// do {
//   console.log(`цифра ${i}!`);
//   i++;
// } while (i < 5);

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number = Number(prompt("Введіть число більше за 100"));
// while (number) {
//   if (number < 101) {
//     number = Number(prompt("Введіть число ще раз"));
//   } else break;
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const girl = girls.map((item) => item.age);
// const age = girl.reduce((sum, item) => sum + item) / 4;

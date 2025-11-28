// Object, Array, Tuple, Enum
console.log("lets learn Object...");

// const person: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: {
//     city: string;
//     country: string;
//   };
// } = {
//   firstName: "Arafat",
//   lastName: "Nill",
//   age: 20,
//   address: {
//     city: "Rajshahi",
//     country: "BanglaDesh",
//   },
// };

// const person: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   skills: string[];
// } = {
//   firstName: "Arafat",
//   lastName: "Nill",
//   age: 20,
//   skills: ["Node.js", "Express JS"],
// };

// // define array
// const mySkills: string[] = ["React", "Node", "Next.js"];

// // loose ts powerful
// const mySkills2: any[] = ["React", "Node", "Next.js", true, false, 34];

// console.log(person);

// tuple mines fixed array of types
// const person: {
//   name: string;
//   age: number;
//   skills: string[];
//   product: [number, string];
// } = {
//   name: "Arafat Nill",
//   age: 21,
//   skills: ["React", "Node.js", "Next.js"],
//   product: [10, "Mac Book M2"],
// };

// console.log(person)

// enum

enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY_USER,
}
const person: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string];
  role: Role;
} = {
  name: "Arafat Nill",
  age: 21,
  skills: ["React", "Node.js", "Next.js"],
  product: [10, "Mac Book M2"],
  role: Role.AUTHOR,
};

if (person.role === Role.ADMIN) {
  console.log("Admin");
} else if (person.role === Role.AUTHOR) {
  console.log("author");
} else if (person.role === Role.READ_ONLY_USER) {
  console.log("read Only");
} else {
  console.log("unauthorized");
}

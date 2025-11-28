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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
var person = {
    name: "Arafat Nill",
    age: 21,
    skills: ["React", "Node.js", "Next.js"],
    product: [10, "Mac Book M2"],
    role: Role.AUTHOR,
};
if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.AUTHOR) {
    console.log("author");
}
else if (person.role === Role.READ_ONLY_USER) {
    console.log("read Only");
}
else {
    console.log("unauthorized");
}

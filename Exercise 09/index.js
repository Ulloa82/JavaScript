let siblings = [
  "Alexander",
  "Carolina",
  "Arnoldo",
  "Mariangelica",
  "Nina",
  "Lyla",
  "Jorge"
];
let parents = ["Teofilo", "Reina"];
console.log(siblings);
console.log(parents);
console.log(siblings);
console.log(siblings.concat(parents));
siblings.push("Iron");
console.log(siblings);
siblings.reverse();
console.log(siblings);
// console.log(parents[1]);
console.log;
for (let i = 0; i < parents.length; i++) {
  console.log(parents[i]);
}
for (let parent of parents) {
  console.log(parent);
}

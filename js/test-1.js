const peoples = {
    male: "Man",
    strong: "fat",
};

const people = Object.create(peoples);
people.weight = "180cm";


console.log(peoples.isPrototypeOf(people));
console.log(people.hasOwnProperty("strong"));
console.log(people.hasOwnProperty("weight"));

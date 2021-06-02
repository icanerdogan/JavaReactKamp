//Destructring

let populations = [10000, 20000, 30000, [40000, 10000]]
let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1], number) {
    console.log(small1);
}

someFunction(populations)


let category = {id:1, name:"İçecek"}
console.log(category.id);
console.log(category["name"]);

let{id, name1} = category
console.log(id);
console.log(name1);
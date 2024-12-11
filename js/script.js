var hobbies = ["reading", "swimming", "wine tasting", "jogging", "playing with my pups", "cooking"];
// console.log(hobbies.length);
hobbies.push("painting");
// console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "biking", "traveling");
// console.log(hobbies);
hobbies.shift();
// console.log(hobbies);
hobbies.unshift("playing games");
// console.log(hobbies);

var goals = ["complete coding bootcamp", "sell my house", "move to Spain"];

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);
console.log(allTheThings.indexOf("wine tasting"));

allTheThings.splice(4, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}`;
});

console.log(plans);
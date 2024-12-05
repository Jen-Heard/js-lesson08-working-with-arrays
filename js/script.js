var hobbies = ["reading", "writing", "cooking", "coding", "painting", "running"];
var goals = ["Complete Skillcrush bootcamp", "Find a front end developer job", "Relocate to Spain"];

console.log(hobbies.length);

hobbies.push("listening to music");
console.log(hobbies[2]);

hobbies.pop();
console.log(hobbies.length);

hobbies.splice(2, 0, "swimming", "playing with dogs");
console.log(hobbies);

hobbies.shift();
hobbies.unshift("playing basketball");
console.log(hobbies);

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

var thing = allTheThings.indexOf("painting");
console.log(thing);

var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}.`
});
console.log(plans);
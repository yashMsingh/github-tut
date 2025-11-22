let conn = 23;
const name = "yas"

function greet() {
    console.log("Hello " + name);
}

function add(a, b) {
    return a + b + conn;
}
module.exports = { greet, add };
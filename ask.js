const readline= require("readline");

const rl= readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

rl.question("what name?", answer=>
{
console.log(`ans is ${answer}`);
});
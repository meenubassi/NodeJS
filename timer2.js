const waitime=3000;
const waitinterval=500;
let currentime=0;

const inctime=()=>
{
currentime+=waitinterval;
const p= Math.floor((currentime/waitime)*100);
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write(`waiting.........${p}%`);
};
console.log(`delay time${waitime/1000}seconds`);

const timefinished = ()=>
{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")};


setTimeout(timefinished,waitime);

const interval=setInterval(inctime,waitinterval);

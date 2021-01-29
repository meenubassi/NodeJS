const waitime=3000;
const waitinterval=500;
let currentime=0;

const inctime=()=>
{
currentime+=waitinterval;
console.log(`wait time${currentime/1000}seconds`);
};
console.log(`delay time${waitime/1000}seconds`);

const timefinished = ()=>
{
    clearInterval(interval);
    console.log("done")};


setTimeout(timefinished,waitime);

const interval=setInterval(inctime,waitinterval);

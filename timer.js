const waitime=3000;
console.log(`delay for${waitime/1000}seconds`);
const finishtime=()=>console.log("done");
setTimeout(finishtime,waitime);
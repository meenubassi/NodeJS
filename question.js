const questions= [
    "what is your name?",
    "how old are you?",
    "which language you want learn?"

];
const ask=(i=0)=>
{
    process.stdout.write(`\n\n${questions[i]}`);
    process.stdout.write(`>`);
};
ask();

const answer=[];

process.stdin.on("data",data=>{

    answer.push(data.toString().trim());
    if(answer.length<questions.length)
    ask(answer.length);
    else
    process.exit();

    process.on("exit",()=>
    {
        const [name,age,lang]=answer;
        console.log(`thanks for all answers
        go${name},${lang}, lateron eneed ${age}`)
    });

});
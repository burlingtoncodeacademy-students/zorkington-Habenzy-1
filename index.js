const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `Hello adventurer and welcome, to your DOOM!`;
  let answer = await ask(welcomeMessage);
  console.log("Now write your code to make this work!");
  process.exit();
}

export function add(a: number, b: number): number {
  return a + b;
}

const foo = () => {
  console.log("foo");
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Guess the number game");
  const max = 100;
  console.log(`I'm thinking of a number between 1 and ${max}.`);
  const theNumber = Math.floor(Math.random() * max) + 1;

  let guessNo = 0;
  while (true) {
    const input = prompt(`Guess the number: (guess number ${++guessNo})`, "");
    const guess = parseInt(input as string);
    if (isNaN(guess)) {
      console.log(`Your guess "${input}" is not a number.`);
      continue;
    }
    if (guess < theNumber) {
      console.log("Too low. Try again.");
    }
    if (guess > theNumber) {
      console.log("Too high. Try again.");
    }
    if (guess < 1) {
      console.log("Please enter a number greater than 0.");
    }
    if (guess > max) {
      console.log(`Please enter a number less than ${max}.`);
    }
    if (guess === theNumber) {
      console.log(`You got it! You guessed the number in ${guessNo} guesses! The number was`, theNumber);
      break;
    }
  }
}

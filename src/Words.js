import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((res) => res.text())
    .then((res) => {
      const wordArr = res.split("\n");
      todaysWord =  wordArr[Math.floor(Math.random() * wordArr.length)]
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};

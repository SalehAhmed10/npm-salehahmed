#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const { blueBright, bgBlack, yellowBright } = require("colorette");

const log = (message) => console.log(bgBlack(red(message)));

const name = `${yellowBright("Saleh Ahmed")}`;
const email = `${blueBright("dev.salehahmed@gmail.com")}`;
const work = yellowBright(`Frontend Developer`);

const twitter = blueBright("https://twitter.com/devsalehahmed");
const linkedIn = blueBright("https://www.linkedin.com/in/10-salehahmed/");
const github = blueBright("https://github.com/SalehAhmed10/");
const website = blueBright("https://salehahmed.vercel.app/");
const npx = blueBright("npx salehahmed");

const rows = {
  github: github,
  linkedIn: linkedIn,
  email: email,
  website: website,
  twitter: twitter,
  Card: npx,
};

let output = `${name} / ${work}`;

const maxkeyLetters = Math.max(...Object.keys(rows).map((key) => key.length));
const secondaryContent = Object.keys(rows)
  .map((key) => {
    return `${key.padEnd(maxkeyLetters)} : ${rows[key]}`;
  })
  .join("\n");

output += `\n\n${secondaryContent}`;

console.log(output);

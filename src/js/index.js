/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["ate", "pissed", "crushed", "broked"];
  let what = ["my car", "my keys", "my homework", "the poem"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    "  " +
    what[Math.floor(Math.random() * what.length)] +
    "  " +
    when[Math.floor(Math.random() * when.length)];

  console.log(excuse);

  let message = document.querySelector("#excuse");
  message.innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};

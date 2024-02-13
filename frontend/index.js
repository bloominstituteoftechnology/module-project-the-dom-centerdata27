function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section > div");
  // select everuthing  under section and give include "widgit" to all divs inder section node
  widgets.forEach((widget) => widget.classList.add("widget"));
  // we are looping through all divs in the section node and adding a class to each div

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIndex = Math.floor(Math.random() * quotes.length);
  //generate a randome index from the array of quotes
  const randomQuote = quotes[randomIndex];
  // we will hold quote here and append it to the quoteoftheday div
  const quoteText = randomQuote.quote;
  // we are specifically getting the text of the quote
  const quote = document.createElement("div");
  quote.textContent = quoteText;
  // we are appending the text to the quote node

  // we are selecting the div
  const widgit1 = document.querySelector(".quoteoftheday");
  // we are selecting the div

  widgit1.appendChild(quote);
  // we are appending the div to the widgit1 div

  console.log(widgit1);
  // console.log(randomIndex)
  // console.log(randomQuote)
  const authorDate = document.createElement("div");
  const { author, date } = randomQuote;
  // console.log(author)
  // console.log(date)
  authorDate.textContent = `${author} in ${date || "an unknown date "}`;
  widgit1.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];
  //generating 2 random verbs from the array of verbs
  const randomAdVerb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdVerb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
  // generating 2 random adverbs from the array of verbs
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
// generating 2 random nouns from the array of nouns
 const praragrapth = document.createElement("p");
 // create a p to put inndide widgit box
 const mumboJumbo =`We need to ${randomVerb1} our ${randomNoun1} ${randomAdVerb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdVerb2}.`;
praragrapth.textContent = mumboJumbo;
// createte what we will assing to widgit
document.querySelector(".corporatespeak").appendChild(praragrapth);
// append what we have created to the widgit

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector(".countdown");
  //target what we will assing to widgit
  let count = 5
  //count down starts at 5
  const countDown = document.createElement("p");
  // create a p to put inndide widgit box
  countDown.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countDown);
  // append what we have created to the widgit

const id = setInterval(() => {
  if (count === 1){
    countDown.textContent = `Liftoff! 🚀`;
    clearInterval(id);
  }else {
    count --
  countDown.textContent = `T-minus ${count}...`;
  
  }
}, 1000);
// number has to go down every secound !!
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  console.log(people)
  const person = people[Math.floor(Math.random() * people.length)];
  console.log(person)
  const personParagrapth = document.createElement("p");
document.querySelector(".friends").appendChild(personParagrapth);
personParagrapth.textContent = `${person.name} is ${person.age} years old

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();

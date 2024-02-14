function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgets = document.querySelectorAll("section > div");
  widgets.forEach((widget) => widget.classList.add("widget"));

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteText = randomQuote.quote;
  const quoteWidget = document.querySelector(".quoteoftheday");
  const quote = document.createElement("div");
  quote.textContent = quoteText;
  quoteWidget.appendChild(quote);
  const authorDate = document.createElement("div");
  const { author, date } = randomQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  quoteWidget.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];
  const randomAdVerb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomAdVerb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
  const paragraph = document.createElement("p");
  const mumboJumbo =`We need to ${randomVerb1} our ${randomNoun1} ${randomAdVerb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdVerb2}.`;
  paragraph.textContent = mumboJumbo;
  document.querySelector(".corporatespeak").appendChild(paragraph);

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdownWidget = document.querySelector(".countdown");
  let count = 5;
  const countDown = document.createElement("p");
  countDown.textContent = `T-minus ${count}...`;
  countdownWidget.appendChild(countDown);

  const id = setInterval(() => {
    if (count === 1) {
      countDown.textContent = `Liftoff! 🚀`;
      clearInterval(id);
    } else {
      count--;
      countDown.textContent = `T-minus ${count}...`;
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement("p");
  document.querySelector(".friends").appendChild(personParagraph);
  const year = person.dateOfBirth.slice(0, 4);
  let sentence = `${person.fname} ${person.lname} was born in ${year} and is friends with ${person.friend}`;
  if (!person.friends.length){
    sentence += ' has no friends';
  } else {
    sentence += ` is friends with others: `;
    for (let i = 0; i < person.friends.length; i++) {
      const friendId = person.friends[i];
      const friend = people.find (p => p.id === friendId);
      const fullName = `${friend.fname} ${friend.lname}`;
      sentence += fullName;
      if (i < person.friends.length - 1) {
        sentence += ', ';
      }
    }
  }
  personParagraph.textContent = sentence;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  // You need to add tabindex attributes to the widgets for keyboard navigation
  widgets.forEach((widget, index) => {
    widget.setAttribute('tabindex', index + 1);
  });
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();

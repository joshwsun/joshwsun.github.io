const quote_strings = [
  ["Of course you may be a lark, and that would be lucky. But in general pay attention to the wings, not to the sky.", "Mary Ruefle"],
  ["It’s not what the world holds for you, it’s what you bring to it.", "L.M. Montgomery"],
  ["It is not down on any map; true places never are.", "Herman Melville"],
  // ["And though I thought I'd done the damage I was born for, / there was still so much to step through, / so much to mar.", "Julie Carr"]
  ["It is not down on any map; true places never are.", "Herman Melville"],
  ['"When do we start feeling like the world belongs to us?" ... "I don\'t know," I said. "Tomorrow."', "Benjamin Alire Sáenz"],
];

// Fisher-Yates Sorting Algorithm
function shuffle(arr) { 
  for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  } 
  return arr; 
}; 

const shuffled_quote = shuffle(quote_strings)

function randomIndex(maxRange) {
    return Math.floor(Math.random() * (maxRange));
}

var currentIndex = randomIndex(shuffled_quote.length);

function getQuote(){
	currentIndex = (currentIndex + 1) % shuffled_quote.length;
    document.getElementById("quote").innerHTML = shuffled_quote[currentIndex][0] + " -" + shuffled_quote[currentIndex][1];
    // document.getElementById("by").innerHTML = shuffled_quote[currentIndex][1];
}

window.onload = getQuote;
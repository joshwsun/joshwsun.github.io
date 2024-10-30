// list of quote, author
const quote_strings = [
  ["... even if you can’t ever make it off the ground, say you are a turkey—well, that is an interesting thing.", "Mary Ruefle"],
  ["It’s not what the world holds for you, it’s what you bring to it.", "Anne Shirley"],
  ["It is not down on any map; true places never are.", "Herman Melville"],
  ['"When do we start feeling like the world belongs to us?" ... "I don\'t know," I said. "Tomorrow."', "Benjamin Alire Sáenz"],
  ["But the wind always swept my words away like cloud shadows, as if it mattered more that I said them, than who heard them.", "Lauren Wolk"],
  ["Your confetti tongue explodes / into acid jazz.", "Wendy Xu"],
  ["And though I thought I'd done the damage I was born for, / there was still so much to step through, / so much to mar.", "Julie Carr"],
  ["Invisible fish swim this ghost ocean now described by waves of sand, by water-worn rock.", "Joy Harjo"],
  ["Time dripped from the faucet like a magician’s botched trick.", "Chen Chen"],
  ["The first track still almost swings. High hat and snare, even / A few bars of sax the stratosphere will singe-out soon enough.", "Tracy K. Smith"],
  ["Never say no when you really want to say yes.","Jenny Han"],
  ["Birds would overthrow the cathedral towers. / I would have a magician’s hair, full of sleeves & saws", "Chen Chen"],
  ["\"No more trying to be something that I'm just—just not.\" \"What if you're trying to be somebody you are?\"", "Legally Blonde (2001)"],
  ["far west of this here and now / awash with these azaleas' purples, / pinks, and whites, these late camellia reds.", "Reginald Shepherd"],
  ["Sailing toward dawn, and I was perched atop the crow's nest, being the ship's eyes.", "Kenneth Oppel"],
  [" ... and to have it all, you have to risk it all.", "Jenny Han"],
  ["I can no longer remember / the being afraid, only that it came to an end.", "Kaveh Akbar"]
];

// Fisher-Yates Sorting Algorithm
// Will randomly shuffle an array
function shuffle(arr) { 
  for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
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

function showDiv(divID) {
	if (document.getElementById(divID).style.display == ""){ // hide if displayed
		document.getElementById(divID).style.display = "none";
	} else {
		document.getElementById(divID).style.display = "";
	}
}

window.onload = getQuote;
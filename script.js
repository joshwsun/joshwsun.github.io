const advice_strings = [
  ["Of course you may be a lark, and that would be lucky. But in general pay attention to the wings, not to the sky.", "Mary Ruefle"],
  ["It’s not what the world holds for you. It’s what you bring to it.", "L.M. Montgomery"],
  ["It is not down on any map; true places never are.", "Herman Melville"],
];

// Fisher-Yates Sorting Algorithm
function shuffle(arr) { 
  for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  } 
  return arr; 
}; 

const shuffled_advice = shuffle(advice_strings)

function randomIndex(maxRange) {
    return Math.floor(Math.random() * (maxRange));
}

var currentIndex = randomIndex(shuffled_advice.length);

function getAdvice(){
	currentIndex = (currentIndex + 1) % shuffled_advice.length;
    document.getElementById("advice").innerHTML = shuffled_advice[currentIndex][0];
    document.getElementById("by").innerHTML = shuffled_advice[currentIndex][1];
}

window.onload = getAdvice;
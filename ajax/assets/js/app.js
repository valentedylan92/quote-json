let requestURL = 'assets/ajax/quotes.json';
let request = new XMLHttpRequest();
let blockQuote = document.getElementsByClassName('quote');
let ctaQuote = document.getElementById('eventQuote');
let quotePar = document.createElement('p');
quotePar.className='quote__sentence';
let quoterPar = document.createElement('h3');
quoterPar.className ='quote__quoter';



request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let jsonResponse = request.response;
  // displayQuotes(jsonResponse);
  randomQuote(jsonResponse)
  ctaQuote.addEventListener('click',function(){
    randomQuote(jsonResponse)
  })
}

// ctaQuote.addEventListener('click',function(){
//   randomQuote(jsonResponse)
// })

function randomQuote(json){
  let quotes =json['quotes'];
  let length = quotes.length;
  let randomIndex = Math.floor(Math.random()*length);
  let quote = quotes[randomIndex];
  quotePar.textContent = quote['quote'];
  quoterPar.textContent = quote['name'];
  blockQuote[0].appendChild(quotePar);
  blockQuote[0].appendChild(quoterPar);
}

// function displayQuotes(json){
//   let quotes = json['quotes'];
//   quotes.forEach(function(element) {
//       quotePar.textContent = element['quote'];
//       quoterPar.textContent = element['name'];
//       blockQuote.appendChild(quotePar);
//       blockQuote.appendChild(quoterPar);
//   });
// }

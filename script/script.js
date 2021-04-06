let banqueDeQuote = [
  "Je suis le meilleur",
  "non,il faut y aller",
  "this is sparta",
  "i am still standing",
];
function ajouterQuote() {
  let quotekatara = document.getElementById("quotekatara");
  quotekatara.innerHTML = banqueDeQuote[findIndex()];
  let quoteappa = document.getElementById("quoteappa");
  quoteappa.innerHTML = banqueDeQuote[findIndex()];
  let quotesokka = document.getElementById("quotesokka");
  quotesokka.innerHTML = banqueDeQuote[findIndex()];
  let quotezuko = document.getElementById("quotezuko");
  quotezuko.innerHTML = banqueDeQuote[findIndex()];
}
function findIndex() {
  return Math.floor(Math.random() * banqueDeQuote.length);
}

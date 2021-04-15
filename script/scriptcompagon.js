//antoine leblanc et augustine poirier
let banqueDeQuote = [
  "Parfois, la vie est comme ce tunnel sombre. On ne peut pas toujours voir la lumière au bout du tunnel. Mais si vous continuez à avancer, vous arriverez à un meilleur endroit.",
  "Si vous cherchez la lumière, vous pouvez souvent la trouver, mais si vous cherchez l’obscurité, c’est tout ce que vous verrez.",
  "Il est temps pour vous de regarder vers l’intérieur, et de commencer à vous poser les grandes questions : Qui êtes-vous? Et que voulez-vous?",
  "L’orgueil n’est pas le contraire de la honte, mais sa source.",
  "Je n’ai jamais été en colère contre toi. J’étais triste parce que j’avais peur que tu te perdes.",
  "Oh grand et puissant serpent de mer, veuillez accepter cette savoureuse offrande.",
  "Hey! Nous sommes en territoire ennemi. Ce sont des oiseaux ennemis.",
  "Boomerang! Vous revenez toujours! ",
];
function ajouterQuote() {
  let quotekatara = document.getElementById("quotekatara");
  let index = findIndex();
  quotekatara.innerHTML = banqueDeQuote.splice(index, 1)[0];
  let quoteappa = document.getElementById("quoteappa");
  index = findIndex();
  quoteappa.innerHTML = banqueDeQuote.splice(index, 1)[0];
  let quotesokka = document.getElementById("quotesokka");
  index = findIndex();
  quotesokka.innerHTML = banqueDeQuote.splice(index, 1)[0];
  let quotezuko = document.getElementById("quotezuko");
  index = findIndex();
  quotezuko.innerHTML = banqueDeQuote.splice(index, 1)[0];
  let quotetoph = document.getElementById("quotetoph");
  index = findIndex();
  quotetoph.innerHTML = banqueDeQuote.splice(index, 1)[0];
}
function findIndex() {
  return Math.floor(Math.random() * banqueDeQuote.length);
}

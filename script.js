console.log("connecté !");

const questions = document.querySelectorAll(".question");
// console.log(questions);


// Je soumets chaque élément du tableau à la même action
questions.forEach((item) => {
  // console.log('item');
  item.addEventListener("click", function () {
    // console.log('item cliqué !', item);
    // Je sélectionne et stocke la div suivante de l'item cliqué
    const next = item.nextElementSibling;
    // console.log(next);
    // Je rends visible ou invisible la réponse
    next.classList.toggle('visible');
    const icone = item.lastElementChild;
    // console.log(icone);
    icone.classList.toggle('fa-chevron-up');
  });
});

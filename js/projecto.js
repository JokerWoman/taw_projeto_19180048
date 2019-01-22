window.onscroll = function () {
  /*
    Todos os scrolls que forem detectados
    chama a função abaixo.
  */
  navigationBackgroundClassSelector()
};

function navigationBackgroundClassSelector() {
  /*
    Faço o get do id do nav "navigationElement"
    e adiciono a class scrolled se o utilizador
    fizer scroll em relação to top de 350 caso contrário
    removo a class. Esta class escurece a nav bar.
  */

  var myNav = document.getElementById("navigationElement");

  if (document.documentElement.scrollTop > 350) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
}

function validateFormOnSubmit() {
  /*
    Após um submit do form
    alerto o utilizador que
    a duda foi enviada.
  */
  alert("Duda Enviada!");
  return true;
}
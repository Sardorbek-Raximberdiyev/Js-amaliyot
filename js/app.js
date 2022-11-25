const elform = document.querySelector('form');
const elInput = document.querySelector('input');
const elWrapperContent = document.querySelector('.wrapper')
const elHero = document.querySelector('.hero');


elform.addEventListener('submit', function(evt) {
  evt.preventDefault()
  const elInputText = elInput.value;
  const elFirstName = elInputText.charAt().toUpperCase();
  const elLastName = elInputText.slice(1).toLowerCase();
  const elFullName = elFirstName + elLastName;
  elWrapperContent.innerHTML = '';
  switch (elFullName) {
    case 'Toshkent':
      elWrapperContent.innerHTML = `<h2 class="wrapper__title">Toshkentga xush kelibsiz</h2>
      <p class="wrapper__text">Xozircha saytga ma'lumotlar yuklanmadi</p>`;
      elHero.innerHTML = '';
      break
    case 'Andijon' :
      elWrapperContent.innerHTML = `
      <h2 class="wrapper__title">Andijonga xush kelibsiz</h2>
      <p class="wrapper__text"><strong>Andijon</strong> Oʻzbekistonning Andijon viloyatidagi shahardir. Viloyatning maʼmuriy, iqtisodiy va madaniy markazi. Oʻzbekistonning yirik industrial shaharlaridan biri. Shahar Fargʻona vodiysining sharqida. Andijonsoy yoqasida, dengiz sathidan 450 m balandlikda joylashgan. Iyulning oʻrtacha harorati 27 °C — 28 °C, yanvarniki — 3 °C. Aholisi 333,4 ming kishi (2000). Maydoni 74,3 km2. Andijon shahri shimoli-gʻarbdan Oltinkoʻl tumani, gʻarbdan Buloqboshi tumani va janubi-sharqdan Andijon tumani bilan chegaradosh.</p>
      <img class="wrapper__img" src="https://www.agro.uz/wp-content/uploads/2021/09/andijon-e1633416272681.jpg" alt="Zaxiriddin Muhammad Bobur" width="760">
      <h2 class="wrapper__title">Xaritadan kuzatish</h2>
      <iframe class="wrapper__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398064.1615872438!2d72.15020967047796!3d40.77644775574026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndizhan%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1669302277233!5m2!1suz!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      elHero.innerHTML = '';
      break
    default :
    elWrapperContent.innerHTML = `<h2 class="wrapper__title">Bunday ma'lumot yo'q</h2>`;
  }
})

const elChecbox = document.querySelector('.checbox');
const elJsChecbox = document.querySelector('.js-checbox');
const elBodyOpen = document.querySelector('.white-body');


if (elChecbox) {
  elChecbox.addEventListener('click', function () {
    elJsChecbox.classList.toggle('checbox-toggle');
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme", "dark");
  const darkModeToggle = document.getElementById("chk");

  if (theme === "dark") {
    document.body.classList.add("dark-body");
  } else {
    document.body.classList.remove("dark-body");
  }

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-body");

    if (document.body.classList.contains("dark-body")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});


// MODAL
const elModalButton = document.querySelector('.js-close-button');
const elModal = document.querySelector('.modal');

if (elModalButton) {
  elModalButton.addEventListener('click', function () {
    elModal.classList.remove('modal-open');
  })
}

setTimeout(function () {
  elModal.classList.add('modal-open')
}, 5000);

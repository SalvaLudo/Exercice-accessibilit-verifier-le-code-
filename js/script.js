// ===== Terre & Bois – scripts =====

// Menu mobile
function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

// Ajout au panier
let total = 0;
function ajouterPanier(nom) {
  total++;
  document.getElementById('compteur').textContent = total;
  const toast = document.getElementById('toast');
  toast.textContent = '✔';
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 1500);
}

// Newsletter
function inscrire() {
  const champ = document.getElementById('email');
  if (champ.value.indexOf('@') === -1) {
    champ.classList.add('erreur');
  } else {
    champ.classList.remove('erreur');
    champ.value = '';
  }
  return false;
}

// Sous-menus : ouverture au survol (CSS) et au clavier
document.querySelectorAll('.menu-deroulant').forEach((item) => {
  item.addEventListener('focusin', () => item.classList.add('ouvert'));
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget)) item.classList.remove('ouvert');
  });
});

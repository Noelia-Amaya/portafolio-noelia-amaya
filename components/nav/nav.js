// function mostrarSideBar() {
//   const sideBar = document.querySelector('.sideBar');
//   sideBar.style.display = 'flex';
// }

// function esconderSideBar() {
//   const sideBar = document.querySelector('.sideBar');
//   sideBar.style.display = 'none';
// }

function mostrarSideBar() {
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.display = 'flex';
}

function esconderSideBar() {
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.display = 'none';
}

// Para cerrar el sidebar cuando se haga clic fuera de él
document.addEventListener('click', function(event) {
  const sideBar = document.querySelector('.sideBar');
  if (sideBar.style.display === 'flex' && !sideBar.contains(event.target) && !event.target.closest('svg')) {
    esconderSideBar();
  }
});



const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.navbar-ul');



menuButton.addEventListener('click', function(){
	menuButton.classList.toggle('active');
	navList.classList.toggle('navbar-ul-small');
})


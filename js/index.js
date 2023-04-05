const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
});

document.getElementById('project-one').onclick = function() {
	localStorage.setItem("intro-name", "Friends List Website");
   window.location = "portfolioItem.html";
}

document.getElementById('project-two').onclick = function() {
	localStorage.setItem("intro-name", "Task Tracker Website");
   window.location = "portfolioItem.html";
}

document.getElementById('project-three').onclick = function() {
   localStorage.setItem("intro-name", "My Website Example");
   window.location = "portfolioItem.html";
}

document.getElementById('project-four').onclick = function() {
   localStorage.setItem("intro-name", "Time Change Tracker");
   window.location = "portfolioItem.html";
}

document.getElementById('project-five').onclick = function() {
   localStorage.setItem("intro-name", "Book Shop Simulator");
   window.location = "portfolioItem.html";
}


document.getElementById('project-six').onclick = function() {
   localStorage.setItem("intro-name", "Video Uploader");
   window.location = "portfolioItem.html";
}
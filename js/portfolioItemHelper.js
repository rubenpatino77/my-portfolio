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

let programName = localStorage.getItem("intro-name");
document.getElementById("item-intro-name").innerHTML = programName

switch(programName) {
	case "Time Change Tracker":
		document.getElementById("item-intro-pic").src = 'myPics/TCTApp.png';
		document.getElementById("item-intro-subtitle").innerHTML = "NO MORE LOCKED DOORS!"

		let introSubtitle = "<br>How To Use TCT(Time Change Tracker)<br><br>";
		document.getElementById("item-explanation-1").innerHTML = introSubtitle.bold();
		document.getElementById("item-explanation-1").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-1").remove();

		document.getElementById("item-explanation-2").innerHTML = "The Time Change Tracker will check the hours of almost any location to ensure you don't run into anymore locked doors. In order for the user to keep track of a location, they must first open the app and select \"NEW SCHEDULE\", as shown below."
		document.getElementById("item-explanation-gif-2").src = 'myPics/TCTEx-one.gif';

		document.getElementById("item-explanation-3").innerHTML = "The user then inputs the name and address of the location. If any fields are left empty, the application will notify the user about it. The example below illustrates how a user might utilize the app if he or she was interested in the operational hours of Disneyland."
		document.getElementById("item-explanation-gif-3").src = 'myPics/TCTEx-two.gif';

		document.getElementById("item-explanation-4").innerHTML = "The user can then view the operational hours and details of the location by clicking on the entry, as shown below."
		document.getElementById("item-explanation-gif-4").src = 'myPics/TCTEx-three.gif';

		document.getElementById("item-explanation-5").innerHTML = "If the user no longer wants to keep track of a location, they can delete an entry by clicking on it, and then clicking \"DELETE\".";
		document.getElementById("item-explanation-gif-5").src = 'myPics/TCTEx-four.gif';

		let problemsSubtitle = "<br>Handling Users Mistakes<br><br>";
		document.getElementById("item-explanation-6").innerHTML = problemsSubtitle.bold();
		document.getElementById("item-explanation-6").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-6").remove();

		document.getElementById("item-explanation-7").innerHTML = "Everyone makes mistakes and this application notifies the user about some of them. Below is an example of a user trying to create an entry without filling in all inputs.";
		document.getElementById("item-explanation-gif-7").src = "myPics/TCTEx-five.gif";

		document.getElementById("item-explanation-8").innerHTML = "Some users may enter a location that does not exist. As we can see below, the application will simply notify the user that the hours could not be retrieved.";
		document.getElementById("item-explanation-gif-8").src = "myPics/TCTEx-six.gif";

		document.getElementById("item-explanation-9").innerHTML = "Others may enter a location that exists but does not have any operational hours posted. As we can see below, the user is once again notified, and the entry is not inserted.";
		document.getElementById("item-explanation-gif-9").src = "myPics/TCTEx-seven.gif";

		document.getElementById("item-explanation-10").innerHTML = "Finally, the application can, in fact, continue working properly despite minor spelling errors. So long as the word(s) are not too mispelled, the application will simply use the mispelled word(s) and move on with it's normal flow as shown below.";
		document.getElementById("item-explanation-gif-10").src = "myPics/TCTEx-eight.gif";

		break;
	case "My Website Example":
		document.getElementById("item-intro-pic").src = 'img/websiteEx.png';
		document.getElementById("item-intro-subtitle").innerHTML = "Helping a small business grow!"

		document.getElementById("item-explanation-1").innerHTML = "Was up guey!<br>"
		document.getElementById("item-explanation-gif-1").remove();
		document.getElementById("item-explanation-2").innerHTML = "Orale carnal!"
		document.getElementById("item-explanation-gif-2").remove();
		document.getElementById("item-explanation-3").remove();
		document.getElementById("item-explanation-gif-3").remove();
		document.getElementById("item-explanation-4").remove();
		document.getElementById("item-explanation-gif-4").remove();
		document.getElementById("item-explanation-5").remove();
		document.getElementById("item-explanation-gif-5").remove();
		document.getElementById("item-explanation-6").remove();
		document.getElementById("item-explanation-gif-6").remove();
		document.getElementById("item-explanation-7").remove();
		document.getElementById("item-explanation-gif-7").remove();
		break;
}

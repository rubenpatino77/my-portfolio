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
		document.getElementById("item-intro-pic").src = 'myPics/TCTPics/app.png';
		document.getElementById("item-intro-subtitle").innerHTML = "NO MORE LOCKED DOORS!";

		let introSubtitle = "<br>How To Use TCT(Time Change Tracker)<br><br>";
		document.getElementById("item-explanation-1").innerHTML = introSubtitle.bold();
		document.getElementById("item-explanation-1").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-1").remove();

		document.getElementById("item-explanation-2").innerHTML = "The Time Change Tracker will check the hours of almost any location to ensure you don't run into anymore locked doors. In order for the user to keep track of a location, they must first open the app and select \"NEW SCHEDULE\", as shown below."
		document.getElementById("item-explanation-gif-2").src = 'myPics/TCTPics/one.gif';

		document.getElementById("item-explanation-3").innerHTML = "The user then inputs the name and address of the location. If any fields are left empty, the application will notify the user about it. The example below illustrates how a user might utilize the app if he or she was interested in the operational hours of Disneyland."
		document.getElementById("item-explanation-gif-3").src = 'myPics/TCTPics/two.gif';

		document.getElementById("item-explanation-4").innerHTML = "The user can then view the operational hours and details of the location by clicking on the entry, as shown below."
		document.getElementById("item-explanation-gif-4").src = 'myPics/TCTPics/three.gif';

		document.getElementById("item-explanation-5").innerHTML = "If the user no longer wants to keep track of a location, they can delete an entry by clicking on it, and then clicking \"DELETE\".";
		document.getElementById("item-explanation-gif-5").src = 'myPics/TCTPics/four.gif';

		let problemsSubtitle = "<br>Handling Users Mistakes<br><br>";
		document.getElementById("item-explanation-6").innerHTML = problemsSubtitle.bold();
		document.getElementById("item-explanation-6").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-6").remove();

		document.getElementById("item-explanation-7").innerHTML = "Everyone makes mistakes and this application notifies the user about some of them. Below is an example of a user trying to create an entry without filling in all inputs.";
		document.getElementById("item-explanation-gif-7").src = "myPics/TCTPics/five.gif";

		document.getElementById("item-explanation-8").innerHTML = "Some users may enter a location that does not exist. As we can see below, the application will simply notify the user that the hours could not be retrieved.";
		document.getElementById("item-explanation-gif-8").src = "myPics/TCTPics/six.gif";

		document.getElementById("item-explanation-9").innerHTML = "Others may enter a location that exists but does not have any operational hours posted. As we can see below, the user is once again notified, and the entry is not inserted.";
		document.getElementById("item-explanation-gif-9").src = "myPics/TCTPics/seven.gif";

		document.getElementById("item-explanation-10").innerHTML = "Finally, the application can, in fact, continue working properly despite minor spelling errors. So long as the word(s) are not too mispelled, the application will simply use the mispelled word(s) and move on with it's normal flow as shown below.";
		document.getElementById("item-explanation-gif-10").src = "myPics/TCTPics/eight.gif";

		document.getElementById("item-explanation-11").remove();
		document.getElementById("item-explanation-gif-11").remove();
		document.getElementById("item-explanation-12").remove();
		document.getElementById("item-explanation-gif-12").remove();
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();

		break;

	case "My Website Example":

		document.getElementById("item-intro-pic").src = 'myPics/mc559Pics/webIntroPic.png';
		document.getElementById("item-intro-subtitle").innerHTML = "Helping a small business grow!";

		document.getElementById("item-explanation-1").innerHTML = "The website remains under construction, as the client is currently making design decisions." +
							" Click the link below to view the work in progress or view the full explanation further below.<br>";
		document.getElementById("item-explanation-gif-1").remove();
		var webLink = document.createElement('a');
		var linkText = document.createTextNode("SEE WEBSITE HERE");
		webLink.appendChild(linkText);
		webLink.href = "http://rubenpportfolio.com/mc559";
		var mySpan = document.getElementById("item-explanation-2");
		mySpan.parentNode.replaceChild(webLink, mySpan);
		document.getElementById("item-explanation-gif-2").remove();

		let homePageSubtitle = "<br><br>Home Page<br><br>";
		document.getElementById("item-explanation-3").innerHTML = homePageSubtitle.bold();
		document.getElementById("item-explanation-3").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-3").remove();

		document.getElementById("item-explanation-4").innerHTML = "Looking at the video below, we can immediately see the sticky navigation bar setup, " +
							"which is used in every page to allow for easy navigation throughout the entire website. The next thing you may notice is the " +
							"background's usage of parallax scrolling, where the image scrolls slightly slower than the page. At the bottom of the page is a" +
							" contact form that allows potential clients to contact the business owner via email. <br><br>";
		//document.getElementById("item-explanation-gif-4").remove();
		const homeVideoHolder = document.getElementById("item-explanation-4");
		const homeVideo = document.createElement('video');
		homeVideo.src =
		  'myPics/mc559Pics/homePageVid.mp4';
		homeVideo.autoplay = false;
		homeVideo.controls = true;
		homeVideo.muted = true;
		homeVideo.style.width = '100%';
		homeVideoHolder.appendChild(homeVideo);

		let servicesPageSubtitle = "Services Page<br><br>";
		document.getElementById("item-explanation-5").innerHTML = servicesPageSubtitle.bold();
		document.getElementById("item-explanation-5").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-5").remove();

		document.getElementById("item-explanation-6").innerHTML = "As seen previously, the same sticky navigation bar setup is used, and below that" +
						" is a fixed background. All listed services have their own container, which includes the service name, price and explanation." +
						" Each container can be enlarged by hovering over it with the mouse. The video below also shows the footer setup" +
						" for all pages (excluding the home page), as well as the working \"back-to-top\" button. Finally, the \"Contact Us\" button " +
						"is demoed to show that the user is redirected to the home page and auto scrolled to the contact form.<br><br>";
		//document.getElementById("item-explanation-gif-6").remove();
		const servicesVideoHolder = document.getElementById("item-explanation-6");
		const servicesVideo = document.createElement('video');
		servicesVideo.src =
		  'myPics/mc559Pics/servicesPageVid.mp4';
		servicesVideo.autoplay = false;
		servicesVideo.controls = true;
		servicesVideo.muted = true;
		servicesVideo.style.width = '100%';
		servicesVideoHolder.appendChild(servicesVideo);

		var customersPageSubtitle = "Happy Customers Page<br><br>";
		document.getElementById("item-explanation-7").innerHTML = customersPageSubtitle.bold();
		document.getElementById("item-explanation-7").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-7").remove();

		document.getElementById("item-explanation-8").innerHTML = "The first thing you may notice in the video below is that the \"Happy Customers\" page" +
						" is almost identical to the \"Services\" page, which was shown in the previous video. The only difference here is that there are " +
						"example cutomers as well as example testimonials displayed, which do not enlarge with the hovering of the mouse pointer.<br><br>";
		//document.getElementById("item-explanation-gif-8").remove();
		const customersVideoHolder = document.getElementById("item-explanation-8");
		const customersVideo = document.createElement('video');
		customersVideo.src =
		  'myPics/mc559Pics/happyCustomersVid.mp4';
		customersVideo.autoplay = false;
		customersVideo.controls = true;
		customersVideo.muted = true;
		customersVideo.style.width = '100%';
		customersVideoHolder.appendChild(customersVideo);

		var aboutPageSubtitle = "About Page<br><br>";
		document.getElementById("item-explanation-9").innerHTML = aboutPageSubtitle.bold();
		document.getElementById("item-explanation-9").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-9").remove();
		

		document.getElementById("item-explanation-10").innerHTML = "Once again, the same familiar page setup is used here except now the main button in this " +
						"page takes the user to the \"Services\" page.<br><br>";
		//document.getElementById("item-explanation-gif-10").remove();
		const aboutVideoHolder = document.getElementById("item-explanation-10");
		const aboutVideo = document.createElement('video');
		aboutVideo.src =
		  'myPics/mc559Pics/aboutPageVid.mp4';
		aboutVideo.autoplay = false;
		aboutVideo.controls = true;
		aboutVideo.muted = true;
		aboutVideo.style.width = '100%';
		aboutVideoHolder.appendChild(aboutVideo);

		var goalsPageSubtitle = "Goals Page<br><br>";
		document.getElementById("item-explanation-11").innerHTML = goalsPageSubtitle.bold();
		document.getElementById("item-explanation-11").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-gif-11").remove();

		document.getElementById("item-explanation-12").innerHTML = "The \"Goals\" page is simple and follows the previous pages' setup, but the video below reveals" +
						" that the buttons in the footer work as intended as well as the \"Contact Us\" button in the navigation bar.<br><br>";
		//document.getElementById("item-explanation-gif-12").remove();
		const goalsVideoHolder = document.getElementById("item-explanation-12");
		const goalsVideo = document.createElement('video');
		goalsVideo.src =
		  'myPics/mc559Pics/goalsPageVid.mp4';
		goalsVideo.autoplay = false;
		goalsVideo.controls = true;
		goalsVideo.muted = true;
		goalsVideo.style.width = '100%';
		goalsVideoHolder.appendChild(goalsVideo);

		var responsiveSubtitle = "Responsiveness of the Website<br><br>";
		document.getElementById("item-explanation-13").innerHTML = responsiveSubtitle.bold();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-13").style.fontSize = "1.5REM";

		document.getElementById("item-explanation-14").innerHTML = "The website is also very responsive. The video below demos how well the display of each page" +
						", as well as the navigaton bar, responds to a smaller screen.<br><br>";
		//document.getElementById("item-explanation-gif-14").remove();
		const responsiveVideoHolder = document.getElementById("item-explanation-14");
		const responsiveVideo = document.createElement('video');
		responsiveVideo.src =
		  'myPics/mc559Pics/smallScreenVid.mp4';
		responsiveVideo.autoplay = false;
		responsiveVideo.controls = true;
		responsiveVideo.muted = true;
		responsiveVideo.style.width = '100%';
		responsiveVideoHolder.appendChild(responsiveVideo);
		break;

	case "Angular Tutorial 1":

		document.getElementById("item-intro-pic").src = 'myPics/taskTrackerPics/introPic.png';
		document.getElementById("item-intro-subtitle").innerHTML = "Learning How to Use Angular";

		document.getElementById("item-explanation-1").innerHTML = "To get the application up and running, a local development server is used via \"ng serve\"." +
						" In order to communicate the content to the server and back to the UI, a local API is used through JSON Server.";
		document.getElementById("item-explanation-gif-1").remove();
		document.getElementById("item-explanation-2").innerHTML = "<br><br>When the websit is first loaded up,there are no tasks which looks like:";
		document.getElementById("item-explanation-gif-2").src = "myPics/taskTrackerPics/homePage.png";

		document.getElementById("item-explanation-3").innerHTML = "In order to add a task, the user simply needs to press on the \"add\" button which will give" +
						" the user a couple of text boxes to fill in. If the \"task\" box is empty, an alert will pop up as shown below.";
		document.getElementById("item-explanation-gif-3").src = "myPics/taskTrackerPics/taskError.png";

		document.getElementById("item-explanation-4").innerHTML = "When the information is correctly filled in, the task may be added by clicking on the \"Save" +
						" Task\" button. Below is an example of a user adding a 4th task and setting a reminder which is shown with the green bar to the left " +
						"of the corresponding task.";
		document.getElementById("item-explanation-gif-4").src = "myPics/taskTrackerPics/adding4thTask.png";
		document.getElementById("item-explanation-5").remove();
		document.getElementById("item-explanation-gif-5").src = "myPics/taskTrackerPics/taskAdded.png";

		document.getElementById("item-explanation-6").innerHTML = "To delete a task, the user must click on the red \"x\" of the desired task."
		document.getElementById("item-explanation-gif-6").src = "myPics/taskTrackerPics/redX.png";

		document.getElementById("item-explanation-7").innerHTML = "There is also an \"About\" page to make use of angular routing. Clicking on the \"About\" " +
						"button will route the user to the \"About\" page as shown below.";
		document.getElementById("item-explanation-gif-7").src = "myPics/taskTrackerPics/aboutButton.png";
		document.getElementById("item-explanation-8").remove();
		document.getElementById("item-explanation-gif-8").src = "myPics/taskTrackerPics/aboutPage.png";
		document.getElementById("item-explanation-9").remove();
		document.getElementById("item-explanation-gif-9").remove();
		document.getElementById("item-explanation-10").remove();
		document.getElementById("item-explanation-gif-10").remove();
		document.getElementById("item-explanation-11").remove();
		document.getElementById("item-explanation-gif-11").remove();
		document.getElementById("item-explanation-12").remove();
		document.getElementById("item-explanation-gif-12").remove();
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();


	case "My Website Example":
		document.getElementById("item-explanation-1").remove();
		document.getElementById("item-explanation-gif-1").remove();
		document.getElementById("item-explanation-2").remove();
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
		document.getElementById("item-explanation-8").remove();
		document.getElementById("item-explanation-gif-8").remove();
		document.getElementById("item-explanation-9").remove();
		document.getElementById("item-explanation-gif-9").remove();
		document.getElementById("item-explanation-10").remove();
		document.getElementById("item-explanation-gif-10").remove();
		document.getElementById("item-explanation-11").remove();
		document.getElementById("item-explanation-gif-11").remove();
		document.getElementById("item-explanation-12").remove();
		document.getElementById("item-explanation-gif-12").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();

		break;






}

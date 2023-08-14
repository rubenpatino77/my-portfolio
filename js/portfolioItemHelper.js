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
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

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
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();
		break;

	case "Task Tracker Website":

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
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();
		break;


	case "Friends List Website":
		document.getElementById("item-intro-pic").src = 'myPics/friendsAppPics/existingList.png';
		document.getElementById("item-intro-subtitle").innerHTML = "CRUD Application with Ruby";

		document.getElementById("item-explanation-1").innerHTML = "The \"Friends List\" application was created with Ruby on Rails in order to" +
						" practice creating CRUD applications along with getting a chance to work more with databases.<br>To view the live " +
						"website click the link below, otherwise view the website explanation further below.<br>";

		document.getElementById("item-explanation-gif-1").remove();
		var webLink = document.createElement('a');
		var linkText = document.createTextNode("SEE WEBSITE HERE");
		webLink.appendChild(linkText);
		webLink.href = "https://rubensrailsfriendstutorial.herokuapp.com";
		var mySpan = document.getElementById("item-explanation-2");
		mySpan.parentNode.replaceChild(webLink, mySpan);
		document.getElementById("item-explanation-gif-2").remove();
		

		friendsHomePageSub = "<br><br>Home Page<br><br>";
		document.getElementById("item-explanation-3").innerHTML = friendsHomePageSub.bold();
		document.getElementById("item-explanation-3").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-3").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-3").remove();

		document.getElementById("item-explanation-4").innerHTML = "When the website is first opened, the first thing the user will see is the " +
						"homepage with a header of links. An image is shown below.";
		document.getElementById("item-explanation-gif-4").src = "myPics/friendsAppPics/homePage.png";

		friendsAboutPageSub = "<br><br>About Page<br><br>";
		document.getElementById("item-explanation-5").innerHTML = friendsAboutPageSub.bold();
		document.getElementById("item-explanation-5").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-5").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-5").remove();

		document.getElementById("item-explanation-6").innerHTML = "With the first link in the header being the home page, the second link is the" +
						" about page which only displays a small description.";
		document.getElementById("item-explanation-gif-6").src = "myPics/friendsAppPics/aboutPage.png";

		friendsSignInUpSub = "<br><br>Sign In/Up Pages<br><br>";
		document.getElementById("item-explanation-7").innerHTML = friendsSignInUpSub.bold();
		document.getElementById("item-explanation-7").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-7").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-7").remove();

		document.getElementById("item-explanation-8").innerHTML = "The next 2 links in the header are the sign in and sign up links. A new user" +
						" must first sign up, below is an example user signing up.";
		document.getElementById("item-explanation-gif-8").src = "myPics/friendsAppPics/signUpPage.png";

		document.getElementById("item-explanation-9").innerHTML = "A user with an existing account may just sign in";
		document.getElementById("item-explanation-gif-9").src = "myPics/friendsAppPics/signInPage.png";

		friendsUserProfileSub = "<br><br>User Profile<br><br>";
		document.getElementById("item-explanation-10").innerHTML = friendsUserProfileSub.bold();
		document.getElementById("item-explanation-10").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-10").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-10").remove();

		document.getElementById("item-explanation-11").innerHTML = "When a user logs in the header will slightly change and the \"Home\" page will" +
						" contain the friends list as we can see below.";
		document.getElementById("item-explanation-gif-11").src = "myPics/friendsAppPics/newList.png";

		document.getElementById("item-explanation-12").innerHTML = "Here is an existing list with friends already added.";
		document.getElementById("item-explanation-gif-12").src = "myPics/friendsAppPics/existingList.png";

		document.getElementById("item-explanation-13").innerHTML = "Add Friends";
		document.getElementById("item-explanation-13").innerHTML = document.getElementById("item-explanation-13").innerHTML.bold();
		document.getElementById("item-explanation-13").innerHTML += "<br>To add a friend to the list, the user must click on the \"New Friend\" button" +
						" located under the list or the \"Add Friend\" button in the header. The user will then be redirected to the \"Add New Friend" +
						"\" page where they will fill in their friends information and click on the \"Create Frieind\" button."
		document.getElementById("item-explanation-gif-13").src = "myPics/friendsAppPics/addFriend.png";
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").src = "myPics/friendsAppPics/friendAdded.png";

		document.getElementById("item-explanation-15").innerHTML = "Delete Friends<br>";
		document.getElementById("item-explanation-15").innerHTML = document.getElementById("item-explanation-15").innerHTML.bold();
		document.getElementById("item-explanation-15").innerHTML += "To delete a friend, the user clicks on the \"Show This Friend\" button then on " +
						"the \"Destroy This Friend\" button.";
		document.getElementById("item-explanation-gif-15").src = "myPics/friendsAppPics/showButton.png";
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").src = "myPics/friendsAppPics/deleteFriend.png";

		document.getElementById("item-explanation-17").innerHTML = "Edit/Delete Profile<br>";
		document.getElementById("item-explanation-17").innerHTML = document.getElementById("item-explanation-17").innerHTML.bold();
		document.getElementById("item-explanation-17").innerHTML += "The \"Edit Profile\" page allows the user to change their email or password or" +
						" delete their own account, all of which can be seen below.";
		document.getElementById("item-explanation-gif-17").src = "myPics/friendsAppPics/editProfile.png";
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;

	case "Book Shop Simulator":

		document.getElementById("item-intro-pic").src = 'myPics/bookShopMedia/homePage.png';
		document.getElementById("item-intro-subtitle").innerHTML = "Utilizing Angular with NoSQl.";

		document.getElementById("item-explanation-1").innerHTML = "Developing this book shop was a great way to learn how to effectively use Angular " +
						"along with a NoSQL database to build a website that uses the four aspects of CRUD. Tailwind CSS was also used to promote " +
						"efficiency and allow me to focus on the many different features of Angular.<br><br>You may scroll down to view the full explanation" +
						" of the project, otherwise you can click on the link below to view the live website. The live website allows users to " +
						"create an account and save their cart data to a database.<br>";
		document.getElementById("item-explanation-gif-1").remove();
		var webLink = document.createElement('a');
		var linkText = document.createTextNode("SEE WEBSITE HERE");
		webLink.appendChild(linkText);
		webLink.href = "https://rubenp-bookshop.web.app/";
		var mySpan = document.getElementById("item-explanation-2");
		mySpan.parentNode.replaceChild(webLink, mySpan);
		document.getElementById("item-explanation-gif-2").remove();

		bookShopHomePageSub = "<br><br>Home Page<br><br>";
		document.getElementById("item-explanation-3").innerHTML = bookShopHomePageSub.bold();
		document.getElementById("item-explanation-3").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-3").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-3").remove();


		document.getElementById("item-explanation-4").innerHTML = "As shown below, the homepage displays a navigation bar and lists all of the books that are for " +
						"sale. Since the user is not yet signed in, the only buttons or links that will work are the \'Login\' and \'Register\' buttons.";
		document.getElementById("item-explanation-gif-4").src = "myPics/bookShopMedia/homePage.png";

		bookShopRegPageSub = "<br><br>Register Page<br><br>";
		document.getElementById("item-explanation-5").innerHTML = bookShopRegPageSub.bold();
		document.getElementById("item-explanation-5").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-5").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-5").remove();

		document.getElementById("item-explanation-6").innerHTML = "Below you can see a user registering with their valid email and password.";
		document.getElementById("item-explanation-gif-6").src = "myPics/bookShopMedia/registerPage.png";

		document.getElementById("item-explanation-7").innerHTML = "A succeessful regristration looks like this:";
		document.getElementById("item-explanation-gif-7").src = "myPics/bookShopMedia/registerSuccess.png";

		bookShopLoginPageSub = "<br><br>Login Page<br><br>";
		document.getElementById("item-explanation-8").innerHTML = bookShopLoginPageSub.bold();
		document.getElementById("item-explanation-8").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-8").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-8").remove();

		document.getElementById("item-explanation-9").innerHTML = "If a user wants to sign in with their existing account, they would click on the \'Login\' button " +
						"and would be redirected to the Login page, where they can enter their information as shown below";
		document.getElementById("item-explanation-gif-9").src = "myPics/bookShopMedia/loginPage.png";

		document.getElementById("item-explanation-10").innerHTML = "Once the user is signed in, they will be able to add books to their cart, view their cart, or delete any " +
						"unwanted books from their cart. Below is an image of a user's page after adding 3 books to their cart.";
		document.getElementById("item-explanation-gif-10").src = "myPics/bookShopMedia/homePageCart.png";

		bookShopCartPageSub = "<br><br>Editing the Books in the Cart<br><br>";
		document.getElementById("item-explanation-11").innerHTML = bookShopCartPageSub.bold();
		document.getElementById("item-explanation-11").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-11").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-11").remove();

		document.getElementById("item-explanation-12").innerHTML = "This next image is a view of the 3 items in the cart, which can be deleted if the user desires."
		document.getElementById("item-explanation-gif-12").src = "myPics/bookShopMedia/cart.png";

		document.getElementById("item-explanation-13").innerHTML = "Once the user clicks on \'Logout\', the items in their cart get saved to a NoSQL database in " +
						"Firestore. The image below shows the 3 books the user had chosen, after being saved.";
		document.getElementById("item-explanation-gif-13").src = "myPics/bookShopMedia/database.png";

		document.getElementById("item-explanation-14").innerHTML = "Looking at the thumbnail below, we can see the 3 items in the database again. The video demonstrates a" +
						" a user signing in, editing their cart and logging out to save the changes which are shown in the database.<br><br>";
		document.getElementById("item-explanation-gif-14").remove();

		const bookShopVideoHolder = document.getElementById("item-explanation-14");
		const bookShopVideo = document.createElement('video');
		bookShopVideo.src =
		  'myPics/bookShopMedia/saveCart.mp4';
		bookShopVideo.autoplay = false;
		bookShopVideo.controls = true;
		bookShopVideo.muted = true;
		bookShopVideo.style.width = '100%';
		bookShopVideoHolder.appendChild(bookShopVideo);

		//NEED TO FIX HOME PAGE SPACE BETWEEN PROJECTS THEN ADD AND COMMIT
		
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;




	case "Video Uploader":

		document.getElementById("item-intro-pic").src = 'myPics/VideoUploaderMedia/VU-appScreenshot.png';
		document.getElementById("item-intro-subtitle").innerHTML = "Save videos to the cloud.";
		document.getElementById("item-explanation-1").innerHTML = "This application displays all of the users files that end in \'.mp4\' and gives them the option to " + 
						"either delete them or save them to, as well as delete them from, a database. Developing the application has introduced me to a few useful concepts " +
						"such as implementing a RecyclerView, accessing the users local files, using Firebase Storage and more.<br><br> View the full app explanation below.";
		document.getElementById("item-explanation-gif-1").remove();

		VU_localVideos = "<br><br>Local Videos<br><br>";
		document.getElementById("item-explanation-2").innerHTML = VU_localVideos.bold();
		document.getElementById("item-explanation-2").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-2").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-2").remove();

		document.getElementById("item-explanation-3").innerHTML = "When the application first opens, it will automatically acquire all \'.mp4\' files in the device " +
						"and display them in a RecyclerView. The user is also able to view and delete the local videos as the video below demonstrates.";
		//document.getElementById("item-explanation-gif-3").remove();

		const localVideoHolder = document.getElementById("item-explanation-4");
		const localVideo = document.createElement('video');
		localVideo.src =
		  'myPics/VideoUploaderMedia/VU-localFiles.mp4';
		localVideo.autoplay = false;
		localVideo.controls = true;
		localVideo.muted = true;
		localVideo.style.width = '50%';
		localVideo.playbackRate = 2.0;
		localVideoHolder.appendChild(localVideo);
		document.getElementById("item-explanation-gif-4").remove();

		VU_cloudStorage = "<br><br>Using the Cloud Storage<br><br>";
		document.getElementById("item-explanation-5").innerHTML = VU_cloudStorage.bold();
		document.getElementById("item-explanation-5").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-5").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-5").remove();
		document.getElementById("item-explanation-6").innerHTML = "To save memory in the local storage, users may save their videos to the cloud storage. Users can also retrieve the cloud" +
						" videos and add them to the display which will contain a button with a different text and color then the local files have. The video below shows a user utilizing " +
						"the cloud storage by retrieving the videos, adding/deleting a video to/from the cloud and once again removing the displayed cloud videos.";
		//document.getElementById("item-explanation-gif-6").remove();

		const dbVideoHolder = document.getElementById("item-explanation-7");
		const dbVideo = document.createElement('video');
		dbVideo.src =
		  'myPics/VideoUploaderMedia/VU-cloudVideos.mp4';
		dbVideo.autoplay = false;
		dbVideo.controls = true;
		dbVideo.muted = true;
		dbVideo.style.width = '100%';
		dbVideo.playbackRate = 2.0;
		dbVideoHolder.appendChild(dbVideo);
		//document.getElementById("item-explanation-gif-7").remove();

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
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;


	case "Learning ASP.NET Core":

		document.getElementById("item-intro-pic").src = 'myPics/LANC-images/LANC-homePage.png';
		document.getElementById("item-intro-subtitle").innerHTML = "My First ASP.NET Core Project";
		
		document.getElementById("item-explanation-1").innerHTML = "This is a simple application built to learn the basics and file structure of an ASP.NET Core " +
							"project. The application incorporates Razor, Blazor, an api response and a JSON file that acts as a database. The project is explained" +
							" in detail below.";
		document.getElementById("item-explanation-gif-1").remove();


		LANC_homePage = "<br><br>Home Page<br><br>";
		document.getElementById("item-explanation-2").innerHTML = LANC_homePage.bold();
		document.getElementById("item-explanation-2").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-2").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-2").remove();

		document.getElementById("item-explanation-3").innerHTML = "Below is an image of the home screen where the header consist of a couple navigation buttons and the" +
							" body displays the list of items from the JSON file. The header, footer and body all use Razor Pages but within the body, the list of items " +
							"as well as the modals utilize Blazor. Each item listed contains a \'More Info\' button to display more information about the product.";
		document.getElementById("item-explanation-gif-3").src = "myPics/LANC-images/LANC-homePage.png";
		
		document.getElementById("item-explanation-4").innerHTML = "If a \"More Info\" button is clicked, it can be seen below that a modal pops up with more information" +
							" about the corresponding item. These modals, as well as the entire list, were created using Blazor. Here, the user is able to rate the item " +
							"which will then be taken into account for the overall rating. The image below displays a \"More Info\" modal but BEFORE the user gives a rating.";
		document.getElementById("item-explanation-gif-4").src = "myPics/LANC-images/LANC-ratingsBefore.png";

		document.getElementById("item-explanation-5").innerHTML = "The next two images are two different examples of a modal AFTER the user gives a rating. The user is the " +
							"the first voter in the first image and the 8th voter in the second."
		document.getElementById("item-explanation-gif-5").src = "myPics/LANC-images/LANC-ratingsAfter.png";
		document.getElementById("item-explanation-6").remove();
		document.getElementById("item-explanation-gif-6").src = "myPics/LANC-images/LANC-ratingsAfter2.png";

		LANC_privacyPage = "<br><br>Privacy Page<br><br>";
		document.getElementById("item-explanation-7").innerHTML = LANC_privacyPage.bold();
		document.getElementById("item-explanation-7").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-7").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-7").remove();


		document.getElementById("item-explanation-8").innerHTML = "As for the \"Privacy\" navigation button, below is an image of the page it takes the user to. The button" +
							" only serves as a learning tool for routing.";
		document.getElementById("item-explanation-gif-8").src = "myPics/LANC-images/LANC-privacyPage.png";

		LANC_apiSubtitle = "<br><br>API<br><br>";
		document.getElementById("item-explanation-9").innerHTML = LANC_apiSubtitle.bold();
		document.getElementById("item-explanation-9").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-9").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-9").remove();


		document.getElementById("item-explanation-10").innerHTML = "Finally, in order to get familiar with creating an API, a simple GET request is sent when we ask for the " +
							"\"/products\" url extension as the image below displays.";
		document.getElementById("item-explanation-gif-10").src = "myPics/LANC-images/LANC-apiCall.png";

		document.getElementById("item-explanation-11").remove();
		document.getElementById("item-explanation-gif-11").remove();
		document.getElementById("item-explanation-12").remove();
		document.getElementById("item-explanation-gif-12").remove();
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;




			case "Learning EF Core":

		document.getElementById("item-intro-pic").src = 'myPics/EFCoreImages/homePage.png';
		document.getElementById("item-intro-subtitle").innerHTML = "My introduction to EF Core!";

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
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;


/*
		//HOW TO CREATE A SUBTITLE

		LANC_apiSubtitle = "<br><br>API<br><br>";
		document.getElementById("item-explanation-9").innerHTML = LANC_apiSubtitle.bold();
		document.getElementById("item-explanation-9").style.fontSize = "1.5REM";
		document.getElementById("item-explanation-9").style.textDecoration = "underline";
		document.getElementById("item-explanation-gif-9").remove();


		document.getElementById("item-explanation-10").innerHTML = "As shown below, the homepage displays a navigation bar and lists all of the books that are for " +
							"sale. Since the user is not yet signed in, the only buttons or links that will work are the \'Login\' and \'Register\' buttons.";
		document.getElementById("item-explanation-gif-10").src = "myPics/LANC-images/LANC-privacyPage.png";
*/
/*
	case "Title":

		document.getElementById("item-intro-pic").src = '';
		document.getElementById("item-intro-subtitle").innerHTML = "";
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
		document.getElementById("item-explanation-13").remove();
		document.getElementById("item-explanation-gif-13").remove();
		document.getElementById("item-explanation-14").remove();
		document.getElementById("item-explanation-gif-14").remove();
		document.getElementById("item-explanation-15").remove();
		document.getElementById("item-explanation-gif-15").remove();
		document.getElementById("item-explanation-16").remove();
		document.getElementById("item-explanation-gif-16").remove();
		document.getElementById("item-explanation-17").remove();
		document.getElementById("item-explanation-gif-17").remove();
		document.getElementById("item-explanation-18").remove();
		document.getElementById("item-explanation-gif-18").remove();
		document.getElementById("item-explanation-19").remove();
		document.getElementById("item-explanation-gif-19").remove();
		document.getElementById("item-explanation-20").remove();
		document.getElementById("item-explanation-gif-20").remove();

		break;
*/

}

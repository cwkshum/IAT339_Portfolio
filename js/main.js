var nav = document.querySelector('.main-nav');
var matchScreen;

// Check if Navigation Bar should be Visible
function showNavigation(screenSize) {
	if (screenSize.matches) { 
    matchScreen = true;
    // Hide Navigation
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
	} else {
    matchScreen = false;
    // Show Navigation
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
	}
}


window.onscroll =  function(){
  if ((matchScreen && document.body.scrollTop > 180) || (matchScreen && document.documentElement.scrollTop > 180)) {
    // show navigation bar
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
  } else if (!matchScreen){
    // show navigation bar
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
  } else{
    // hide navigation bar
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
  }
};

var screenSize = window.matchMedia("(min-width: 48rem)");
showNavigation(screenSize); // Call listener function at run time
screenSize.addListener(showNavigation);
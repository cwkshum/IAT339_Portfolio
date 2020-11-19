const nav = document.querySelector('.main-nav');

function myFunction(x) {
	if (x.matches) { 
    matchScreen = true;

    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
	} else {
    matchScreen = false;
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
	}
}


window.onscroll =  function(){
  if ((matchScreen && document.body.scrollTop > 180) || (matchScreen && document.documentElement.scrollTop > 180)) {
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
  } else if (!matchScreen){
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
  } else{
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
  }
}

var x = window.matchMedia("(min-width: 48rem)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
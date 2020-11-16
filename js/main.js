var x = window.matchMedia("(min-width: 48rem)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

const nav = document.querySelector('.main-nav');
function myFunction(x) {
  	if (x.matches) { 
		window.onscroll = function() {scrollNav()}
  	} else {
	    nav.style.display = 'block';
  	}
}

function scrollNav() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.display = 'block';
  } else{
  	nav.style.display = 'none';
  }
}
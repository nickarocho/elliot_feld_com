// first, find all the navigation links
var navLinks = Array.from(document.querySelectorAll('#navbar li a'));

// then, listen for a click on the links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const hash = e.target.hash;
    // when a click happens, pass the clicked link to the smooth scroll fn
    handleClick(hash);
  });
});

// write a fn that tells the window to smooth scroll to the clicked
function handleClick(link) {
  const hash = link;
  document.querySelector(`${hash}`).scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// TODO: account for mobile nav

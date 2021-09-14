// check for saved 'dark' in localStorage
let dark = localStorage.getItem('dark'); 

const darkToggle = document.querySelector('#dark-mode-toggle');

const enabledark = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  // 2. Update dark in localStorage
  localStorage.setItem('dark', 'enabled');
}

const disabledark = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
  // 2. Update dark in localStorage 
  localStorage.setItem('dark', null);
}
 
// If the user already visited and enabled dark
// start things off with it on
if (dark === 'enabled') {
  enabledark();
}

// When someone clicks the button
darkToggle.addEventListener('click', () => {
  // get their dark setting
  dark = localStorage.getItem('dark'); 
  
  // if it not current enabled, enable it
  if (dark !== 'enabled') {
    enabledark();
  // if it has been enabled, turn it off  
  } else {  
    disabledark(); 
  }
});


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);
    // this is an approach one we can do with any condition Statement like switch case 
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    }
  });
});

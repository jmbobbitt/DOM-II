//variables grabbing the elements/querySelector

const navBar = document.querySelector('nav.nav');
const imgs = document.querySelectorAll('img');
const anchors = document.querySelectorAll('.nav-link');
const headingTwo = document.querySelectorAll('h2');
const roundImg = document.querySelector('.rounded');
const button = document.querySelectorAll('.btn');
const para = document.querySelectorAll('p');

//--------------------------------------------------------//

//eventlisteners

//-----------------------------//

//---mouseover & mouseleave---//

anchors.forEach(e=> {
    e.addEventListener('mouseover', event => {
        e.style.color = 'green';
});
    e.addEventListener('mouseleave', event=> {
        e.style.backgroundColor = 'gray';
    })
});

//-------images----------------//

//transform images onload 
imgs.forEach(e=> {
    e.addEventListener('load', event => {
        e.style.transform = 'translateX(10px) rotate(-15deg) translateY(10px)';
        e.style.transition = '4s';
   });
});

//change CSS properties for background and font color on keydown and keyup

window.addEventListener('keydown', event => {
    if (event.key == 'Escape') {
        document.body.style.backgroundColor = 'gray';
        document.body.style.color = 'white';
    }
});
    window.addEventListener('keyup', event => {
        if (event.key == 'Escape') {
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'gray';
        }
});


//click that changes the color of the h2 elements to green

headingTwo.forEach(e=> {
    e.addEventListener('click', event => {
        e.style.color = 'green';
    });
});

//double click even changes button text
button.forEach(e => {
    e.addEventListener('dblclick', event => {
      e.textContent = `You clicked a ${e.tagName} with the class name of ${e.className}`;
    });
  });

//scrolling changes the color of the para text to purple

para.forEach(e => {
    window.addEventListener('scroll', event => {
      e.style.color = 'green';
    });
  });

//contextmenu changes background of h2 to black

headingTwo.forEach(e => {
    e.addEventListener('contextmenu', event => {
      e.style.backgroundColor = 'black';
    });
  });


//preventDefault
  
  navBar.addEventListener('click', e => {
    e.preventDefault();
  });
  
  
  const header = document.querySelector('.main-navigation');
  const divInHeader = document.querySelector('.nav-container');
  
  header.addEventListener('click', () => {
    alert('you clicked the header');
    divInHeader.addEventListener('click', e => {
      alert('you clicked the div');
      e.stopPropagation();
    });
  });
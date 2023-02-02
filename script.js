const contentContainer = document.getElementsByClassName('content-container');

for(i = 0; i < contentContainer.length; i++){
  contentContainer[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

// This key word is used to reference the object that is calling the function...In our case, it is the accordion. So instead of using accordion, we use THIS

// The toggle() method toggles between adding and removing a className from an element.





const accordionTitle = document.querySelector('.accordion-title');

function myFunction(){
  accordionTitle.style.color = "cyan";
}


myFunction();



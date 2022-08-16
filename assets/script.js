(function () {
  'use strict'
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          
          //prevent form submission
          event.preventDefault()
          
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        
      }, false)
    })
  })();

/**
 *  Load a different background image depending on size of screen
 */

(function () {
  const div = document.querySelector('.bg-image'),
    
  // Exctracts URLs from data-bg to an array
    src = div.getAttribute('data-bg').split(','), 
    
    html = document.documentElement;
    //--bg--desktop declared in CSS, URL is declared in HTML
    html.style.setProperty('--bg-desktop', `url(${src[0]})`);
    //--bg--mobile declared in CSS, URL is declared in HTML
    html.style.setProperty('--bg-mobile', `url(${src[1]})`);  
}());
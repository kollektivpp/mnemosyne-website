/** PAGE LOAD STUFF **/


/** INTERACTIVE STUFF **/
document.querySelector( '.button-info' ).addEventListener( 'click', function(event) {
    var footer = document.querySelector( 'footer' );

    if (footer.classList.contains('hidden')) {
        footer.classList.remove("hidden");        
    } else {
        footer.classList.add('hidden');
    }
});

window.onscroll = function(event) {
    var logo = document.querySelector( '.logo' );

    if (window.pageYOffset > 0) {
        if (!logo.classList.contains('small')) {
            logo.classList.add('small');
        }   
    } else {
        if (logo.classList.contains('small')) {
            logo.classList.remove('small');
        }   
    }

};
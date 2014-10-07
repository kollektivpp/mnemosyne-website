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
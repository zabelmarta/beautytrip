function showSlide5( ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#slide5' ).classList.add( 'show' );
 }
 document.querySelector( '#pin5' ).addEventListener( 'click', showSlide5 );


 let currentNumber = 1;

 function showNextSlide( ) {
     document.querySelector( '.show' ).classList.remove( 'show' );
     let newNumber = currentNumber + 1;
     document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
     currentNumber = newNumber;
 }
 document.querySelector( '#next' ).addEventListener( 'click', showNextSlide );

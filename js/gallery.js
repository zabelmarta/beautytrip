// dolne przyciski



 function showSlide( newNumber ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
    currentNumber = newNumber;
    selectPin( newNumber );
}

 for (let numerPinu = 1; numerPinu <= 5; numerPinu++) {
    document
      .querySelector('#pin' + numerPinu)
      .addEventListener( 'click', function () {
        showSlide(numerPinu);
      });
  }

 // przycisk prawo

 let currentNumber = 1;
document.querySelector( '#slide' + currentNumber ).classList.add( 'show' );
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );

 function showNextSlide( ) {
    let newNumber = currentNumber + 1;
    if( newNumber > 5 ) {
      newNumber = 1;
    }
    showSlide( newNumber );
  }
  document.querySelector( '#next' ).addEventListener( 'click', showNextSlide );

//przycisk lewo

function showPreviousSlide( ) {

    let newNumber = currentNumber - 1;
    if( newNumber < 1 ) {
        newNumber = 14;
    }
    showSlide( newNumber );
}
document.querySelector( '#prev' ).addEventListener( 'click', showPreviousSlide );

// podświetlenie guziczka

function selectPin( newNumber ) {
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
  }

// auto odtwarzanie

let playing = false;
let slideshowInterval;

function playButtonClicked( ) {
    if ( playing === true ) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}
document.querySelector( '#play' ).addEventListener( 'click', playButtonClicked );

function startSlideshow( ) {
    document.querySelector( '#play' ).classList.add( 'on' );
    playing = true;
    slideshowInterval = setInterval( showNextSlide, 2000 );
}



function stopSlideshow( ) {
    document.querySelector( '#play' ).classList.remove( 'on' );
    playing = false;
    clearInterval( slideshowInterval );
}
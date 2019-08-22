'use strict';

// Retrieve image data

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson));
}

function displayImage(responseJSONspecific) {

  console.log(responseJSONspecific);

  if (responseJSONspecific.code === 404) {
    alert('404 NOT FOUND')
    return null;
  }

  $('.dogImage').append(`
    <img src='${responseJSONspecific.message}' id='dogImage'>
    `);
  console.log(responseJSONspecific.message);

}

function whatDog(breed) {

  let dogType = breed;
    fetch(`https://dog.ceo/api/breed/${dogType}/images/random`)
      .then(response => response.json())
      .then(responseJSONspecific => displayImage(responseJSONspecific))

}

// function howMany() {
//   const dogValue = $('.js-dogAmount').val();
//   console.log(dogValue);

//   if (dogValue > 50){
//     $('ul').html(`Sorry you can only reach a limit of 50 dog images!`)
//   } else if (!dogValue){
//     getDogImage()
//   } else {
//     for (let i = 0; i < dogValue; i++){
//       getDogImage();
//       whatDog('poodle');
//       console.log('this loop is running')
//     }
//   }

// }

// extract the retrieved data
function extractData() {
  $('form').submit(function (event) {
    console.log('submit button pressed');
    event.preventDefault();
    $('ul').empty();
    whatDog($('.js-dogType').val());
    $('.js-dogType').val('');
    // howMany();
    // $('.js-dogAmount').val('');
  });
}


// Add image to DOM
/* function addDogImages(extractedUrl){
  return 
} */

$(extractData);
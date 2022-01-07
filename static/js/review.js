'use strict';

const button = document.querySelector('#leave-review');

button.addEventListener('submit', evt => {
    evt.preventDefault();

    const storeDetails = {
        name: document.querySelector('#store_name').innerText,
        address: document.querySelector('#store_address').innerText,
        zip: document.querySelector('#store_zip').innerText,
        phone: document.querySelector('#store_phone').innerText,
        id: location.pathname.split('/')[2],
        review: document.querySelector('#reviewed').value,
        user: document.querySelector('#hidden-user').value
    };

    fetch('/new-shop', {
        method: 'POST',
        body: JSON.stringify(storeDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    })
      .then(response => response.text()) 
      .then(responseData => { 
          console.log(responseData)
          if (responseData == 'Review created') {
              alert('Thanks for your review!');
              document.querySelector('ul').insertAdjacentHTML('afterbegin', `<li> ${storeDetails.review} </li>`);
            }
      })
});





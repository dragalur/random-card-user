/** @format */
let arrayUser = [];
function sendRequest(method, url) {
   return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.onload = () => {
         if (xhr.status >= 400) {
            reject(arrayUser.push(xhr.response));
            reject(xhr.response);
         } else {
            resolve(xhr.response);
            resolve(arrayUser.push(xhr.response.results));
         }
      };
      xhr.onerror = () => {
         reject(xhr.response);
      };
      xhr.send();
   });
}

let sentenceInfo = ['Name is :', 'Age is :', 'Mail is :', 'Phone is :', 'Adress is :'];
let imageArray = ['name.svg', 'age.svg', 'mail.svg', 'phone.svg', 'adress.svg'];

function setContentCard(card, infoUser) {
   card.Photo.src = infoUser.picture.large;
   let dataInfo = [
      infoUser.name.title + ' ' + infoUser.name.first + ' ' + infoUser.name.last,
      infoUser.dob.age,
      infoUser.email,
      infoUser.cell,
      infoUser.location.country + ', ' + infoUser.location.city,
   ];
   for (let i = 0; i < card.Buttons.length; i++) {
      card.Buttons[i].addEventListener('mouseover', function () {
         let prevElem = card.built.blocMenu.getElementsByClassName('button__active');

         if (prevElem[0] != undefined) prevElem[0].classList.remove('button__active');
         card.Buttons[i].classList.add('button__active');

         card.Text.innerHTML = sentenceInfo[i];
         card.Text.appendChild(document.createElement('br'));
         card.Text.innerHTML += dataInfo[i];
      });
   }
}

async function setCardOnPage(n) {
   for (let i = 0; i < n; i++) {
      await createCard();
   }
   if (n > arrayUser.length) setCardOnPage(n - arrayUser.length);
}

let n = 20;
setCardOnPage(n);
/*
 *
 *
 *
 *
 *
 */

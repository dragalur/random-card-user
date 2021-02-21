/** @format */

let blockCardContent = document.getElementById('card-content');
async function createCard() {
   let data;
   await sendRequest('GET', new URL('https://randomuser.me/api/'))
      .then((resolve) => {
         data = resolve.results[0];
      })
      .catch((err) => console.log(err));
   if (data == undefined) return;
   let card = new Object();
   card.built = new Object();
   card.built.item = document.createElement('div');
   card.built.item.className = 'card-item';

   card.built.blocPhoto = document.createElement('div');
   card.built.blocPhoto.className = 'card-img';

   card.built.photo = document.createElement('img');
   card.built.photo.id = 'card_img';
   card.built.blocPhoto.appendChild(card.built.photo);

   card.built.item.appendChild(card.built.blocPhoto);

   card.built.blocInfo = document.createElement('div');
   card.built.blocInfo.className = 'card-info';

   card.built.info = document.createElement('p');
   card.built.info.id = 'info-text';
   card.built.info.innerHTML = 'Info about user';
   card.built.blocInfo.appendChild(card.built.info);

   card.built.item.appendChild(card.built.blocInfo);

   card.built.blocMenu = document.createElement('div');
   card.built.blocMenu.className = 'menu';

   card.Buttons = [];
   for (let i = 0; i < imageArray.length; i++) {
      card.built.menuBt = document.createElement('div');
      card.built.menuBt.className = '__button';

      card.built.menuImg = document.createElement('img');
      card.built.menuImg.src = 'image/' + imageArray[i];
      card.built.menuBt.appendChild(card.built.menuImg);

      card.built.blocMenu.appendChild(card.built.menuBt);

      card.Buttons.push(card.built.menuBt);
   }
   card.built.item.appendChild(card.built.blocMenu);

   card.Text = card.built.info;
   card.Photo = card.built.photo;

   blockCardContent.appendChild(card.built.item);

   setContentCard(card, data);
}

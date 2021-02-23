/** @format */

function search(id) {
   let test;
   switch (id) {
      case 'buttonSearch':
         test = (i) =>
            Object.values(arrayUser[i][0].name)
               .join(' ')
               .toLowerCase()
               .includes(document.getElementById('menu-search-name').value.toLowerCase());
         break;

      case 'buttonSearchAge':
         test = (i) =>
            parseInt(document.getElementById('search-age_from').value) <= arrayUser[i][0].dob.age &&
            parseInt(document.getElementById('search-age_before').value) >= arrayUser[i][0].dob.age;
         break;
   }

   const cardData = document.querySelectorAll('.card-item');
   for (let i = 0; i < arrayUser.length; i++) {
      if (test(i)) {
         cardData[i].style.display = 'block';
      } else {
         cardData[i].style.display = 'none';
      }
   }
}

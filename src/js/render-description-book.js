// import sprite from '../img/sprite.svg';

export function renderDescBook(aboutBook) {
  return `
  <div class="book-modal">
     <svg class="close-icon" width="24" height="24">
             <use href="#icon-close"></use>
      </svg>
    <div class="book-modal__content">
     <div class="book-modal__book">
      <img
        class="book-modal__img"
        alt="Заголовок"
        loading="lazy"
       />
      <div class="book-modal__text">
        <h4 class="title">Пример</h4>
        <h4 class="author">Автор</h4>
        <p class="description">Описание</p>
        
      </div>
     </div>
     <button class="button btnAdd active" type="button">Add to shopping list</button>
     <div class="btnRemove">
         <button class="button" type="button">Remove from shopping list</button>
     </div>

    </div>
  </div>
    `;
}

// export function renderDescBook(aboutBook) {
//   return `
//   <div class="book-modal">
//      <svg class="close-icon" width="24" height="24">
//              <use href="${sprite}#icon-close"></use>
//       </svg>
//     <div class="book-modal__content">
//      <div class="book-modal__book">
//       <img
//         class="book-modal__img"
//         src="${aboutBook.book_image ? aboutBook.book_image : ``}"
//         alt="${aboutBook.title}"
//         loading="lazy"
//        />
//       <div class="book-modal__text">
//         <h4 class="title">${aboutBook.title}</h4>
//         <h4 class="author">${aboutBook.author}</h4>
//         <p class="description">${aboutBook.description}</p>

//         <div class="book-modal__links">
//           ${aboutBook.buy_links
//             .filter(
//               link =>
//                 link.name === 'Amazon' ||
//                 link.name === 'Bookshop' ||
//                 link.name === 'Apple Books'
//             )
//             .map(link => {
//               return `<a class="link" href=${link.url}>
//               <img
//               class="img ${link.name}"
//               src="./img/${link.name}.png"
//               alt="Shop logo"

//             />
//             </a>`;
//             })
//             .join('')}
//         </div>
//       </div>
//      </div>
//      <button class="button btnAdd active" type="button">Add to shopping list</button>
//      <div class="btnRemove">
//          <button class="button" type="button">Remove from shopping list</button>
//      </div>

//     </div>
//   </div>
//     `;
// }
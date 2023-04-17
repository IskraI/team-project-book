import sprite from '../images/sprite.svg';
import '../images/Apple.png';
import '../images/Bookshop.png';

export function renderShoppingListBooks(savedBooks) {
  console.log(savedBooks);

  const bookItemTemplate = book => `
    <li class="shopping-book">
      <button class="delete-btn" type="button" width="28" height="28">
        <svg class="delete-icon" width="28" height="28">
          <use href="${sprite}#delete-book"></use>
        </svg>
      </button>
      <div class="content">
        <div class="book">
        <div class="book__img">  
        <img
            class="cover"
            src="${book.book_image ? book.book_image : ``}"
            alt="${book.title}"
            loading="lazy"
            width="98"
            height="139"
          />
          <h4 class="book__author">${book.author}</h4>
          </div>
          <div class="book__text">
            <h4 class="book__text-title">${book.title}</h4>
            <h4 class="book__text-type">${book.list_name}</h4>
            <div class="book__links">
              ${book.buy_links
                .filter(
                  link =>
                    link.name === 'Amazon' ||
                    link.name === 'Bookshop' ||
                    link.name === 'Apple Books'
                )
                .map(link => {
                  return `<a class="link" href=${link.url}>
                    <img
                      class="image ${link.name}"
                      src="./images/${link.name}.png"
                      alt="Shop logo"
                    />
                  </a>`;
                })
                .join('')}
            </div>
          </div>
        </div>
        
        <p class="description">${book.description}</p>
      </div>
    </li>`;

  return savedBooks.length > 0
    ? savedBooks.map(bookItemTemplate).join('')
    : `<p>No books saved yet</p>`;
}

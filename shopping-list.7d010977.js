!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.7d010977.js","ee16w":"sprite.0e52e00b.svg","5QzGQ":"Amazon.28f3154b.png","aHFEL":"Apple.7955338c.png","9TWxv":"Bookshop.26fb6e30.png","fU338":"shopping-list.427de287.js"}')),i("axqiF"),i("2NF5N"),i("7EyVx"),i("bNmPK");var s={};s=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("ee16w");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("5QzGQ");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("aHFEL");i("aNJCr").getBundleURL("jSFKT"),i("iE7OH").resolve("9TWxv");new(0,i("1h2Gi").BookAPI);const a=document.querySelector(".shopping-list__list"),l=document.querySelector(".shopping-list__empty");!function(){let e=localStorage.getItem("shoppingList");e=JSON.parse(e),console.log(e),e&&l.classList.add("is-hidden");const t=(o=e).length>0?o.map((e=>`\n    <li class="shopping-book">\n      <button class="delete-btn" type="button">\n        <svg class="delete-icon" width="28" height="28">\n          <use href="${n(s)}#delete-book"></use>\n        </svg>\n      </button>\n      <div class="content">\n        <div class="book">\n        <div class="book__img">  \n        <img\n            class="cover"\n            src="${e.book_image?e.book_image:""}"\n            alt="${e.title}"\n            loading="lazy"\n            width="98"\n            height="139"\n          />\n          <h4 class="book__author">${e.author}</h4>\n          </div>\n          <div class="book__text">\n            <h4 class="book__text-title">${e.title}</h4>\n            <h4 class="book__text-type">${e.list_name}</h4>\n            <div class="book__links">\n              ${e.buy_links.filter((e=>"Amazon"===e.name||"Bookshop"===e.name||"Apple Books"===e.name)).map((e=>`<a class="link" href=${e.url}>\n                    <img\n                      class="image ${e.name}"\n                      src="./image/${e.name}.png"\n                      alt="Shop logo"\n                    />\n                  </a>`)).join("")}\n            </div>\n          </div>\n        </div>\n        \n        <p class="description">${e.description}</p>\n      </div>\n    </li>`)).join(""):"<p>No books saved yet</p>";var o;a.innerHTML=t}(),i("bX5OU")}();
//# sourceMappingURL=shopping-list.7d010977.js.map
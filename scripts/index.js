

import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';




const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

// const itemNames = [ '', 'apples', 'pears' ];
//   itemNames.forEach(name => {
//     try {
//       item.validateName(name);
//       // create a new item if name is valid
//       store.items.push(item.create(name));
//     } catch(error) {
//       console.log(`Cannot add item: ${error.message}`);
//     }
//   });

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();
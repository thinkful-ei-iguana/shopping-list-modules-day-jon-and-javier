/* eslint-disable no-console */

import item from './item.js';



let items = [];
let hideCheckedItems = false;


//
const findById = function(id){
  items.find(id => items.id === id);
}; 



const addItem = function(name){
  try{
    if(!name){
      throw TypeError('no added item');
    }
  } catch(e){
    console.log(e.message);
  }
  items.push(item.create(name));
};



const findAndToggleChecked = function(id){
  const item = items.find(item => item.id === id);
  item.checked = !item.checked;
};



const findUpdateName = function(id,newName){
  try{
    if(newName){
      let updatedName = items.findById(id);
      updatedName.name = newName;
    }
  }catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
};



const findAndDelete = function(id){
  const index = findById(id);
  items.splice(index,1);
};


const toggleCheckedFilter = function () {
  items.hideCheckedItems = !items.hideCheckedItems;
};

/**
 * Places an event listener on the checkbox 
 * for hiding completed items.
 */
const handleToggleFilterClick = function () {
  $('.js-filter-checked').click(() => {
    toggleCheckedFilter();
    render();
  });
};




/*
const toggleCheckedFilter = function () {
  store.hideCheckedItems = !store.hideCheckedItems;
};
*/


export default {
  findById,
  addItem,
  findAndToggleChecked,
  findUpdateName,
  findAndDelete,
  toggleCheckedFilter, 
  items: items,
  hideCheckedItems: hideCheckedItems,
};


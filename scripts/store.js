
import item from './item.js';

const foo = 'bar';

const findById = function(id){
  items.find(id => id.id === id);
}; 

const addItem = function(name){
  try{
    if(!name){
      throw TypeError('no added item');
    }
  } catch(e){
    console.log(e.message);
  }
  items.push(this.items);
  console.log(this.name);
};

const findAndToggleChecked = function(id){
  let foundId = this.findById(id);
  foundId.checked = !foundId.checked;
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
  const index = items.findById(id);
  items.splice(index,1);
};



let items = [];
let hideCheckedItems = false;

export default {
  findById,
  addItem,
  findAndToggleChecked,
  findUpdateName,
  findAndDelete, 
  items: items,
  hideCheckedItems: hideCheckedItems,
};


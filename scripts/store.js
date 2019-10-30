
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
  const index = findById(id);
  items.splice(index,1);
};





export default {
  findById,
  addItem,
  findAndToggleChecked,
  findUpdateName,
  findAndDelete, 
  items: items,
  hideCheckedItems: hideCheckedItems,
};



import item from './item.js';

const foo = 'bar';

const findById = function(id){
    store.items.find(id => id.id === id);
} 

const addItem = function(name){
    try{
        if(!name){
        throw TypeError('no added item')
        }
    } catch(e){
        console.log(e.message)
    }
    store.items.push(this.items);
}

const findAndToggleChecked = function(id){
   let foundId = this.findById(id);
   foundId.checked = !foundId.checked
}

const findUpdateName = function(id,newName){
    try{
        if(newName){
            let updatedName = store.items.findById(id);
            updatedName.name = newName;
        }
    }catch(e){
        console.log(`Cannot update name: ${e.message}`)
    }
}

const findAndDelete = function(id){
    const index = store.items.findById(id);
    store.items.splice(index,1);
}



let items = [];
let hideCheckedItems = false;

export default {
  items: items,
  hideCheckedItems: hideCheckedItems,
};


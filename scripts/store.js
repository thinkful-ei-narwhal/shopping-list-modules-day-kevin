import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}
function addItem(name) {
  try {
    item.validateName(name);
    let newItem = item.create(name);
    this.items.push(newItem);
  } catch(e) {
    console.log(e);
  }
}

function findAndToggleChecked(id) {
  let foundItem = this.items.findById(id);
  foundItem.toggleAttribute('checked');
}

function findAndUpdateName(id,newName) {
  try {
    item.validateName(newName);
    let foundItem =this.items.findById(id);
    this.item.foundItem.name = newName;
  } catch(e) {
    console.log(e);
  }
}

function findAndDelete(id) {
  let foundItem = findById(id);
  let foundIndex = this.items.findIndex(foundItem);
  this.item.splice(foundIndex, 1);
}

export default {
  items,
  hideCheckedItems,
  findAndDelete,
  findAndUpdateName,
  findAndToggleChecked,
  addItem,
  findById,
};

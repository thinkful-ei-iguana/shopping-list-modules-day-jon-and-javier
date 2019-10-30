function validateName(name){
  if (name === undefined){
   throw new TypeError ('Name must not be blank');
  }
}


function create(name){
  return{
    id,
    name,
    checked,
  };
}

export default {
  validateName,
  create,
};
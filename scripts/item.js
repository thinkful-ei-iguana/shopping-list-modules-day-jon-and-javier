function validateName(name){
    try{
      if (name === undefined){
      throw new TypeError ('Name must not be blank');
    } catch(e){
      console.log(e.message);
    }
  }
}


function create(name){
  return{
    id: cuid(),
    name,
    checked: false,
  };
}

export default {
  validateName,
  create,
};
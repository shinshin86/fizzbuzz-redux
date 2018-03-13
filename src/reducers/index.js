const initFzState = {
  counter: 0,
  fzlist: []
}

// fizzbuzz
const printFz = (count) => {
  let res = ''
  if (count % 3 == 0)
    res += "Fizz"
  if (count % 5 == 0)
    res += "Buzz"
  if (res.length == 0)
    return count
  return res
}

const myReducer = (state=initFzState, action) => {
  switch(action.type){
    case 'INCREMENT':
       return Object.assign({}, state, {
         counter: state.counter + action.num,
         fzlist: [...state.fzlist, printFz(state.counter + action.num)]
       });
    default:
      return state;
  };
}

export default myReducer

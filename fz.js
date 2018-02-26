import { createStore } from 'redux';

const initFzState = {
  counter: 0,
  fzlist: []
}

const increment = (num=1) => {
  return {
    type: "INCREMENT",
    num
  };
};

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

const myStore = createStore(myReducer);

// subscribe
myStore.subscribe(() => {
  console.log(myStore.getState().fzlist[myStore.getState().counter - 1])
})

for(let i = 0; i < 100; i++) {
  myStore.dispatch(increment(1));
}

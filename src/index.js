import { createStore } from 'redux';
import increment from './actions'
import myReducer from './reducers'

const myStore = createStore(myReducer);

// subscribe
myStore.subscribe(() => {
  console.log(myStore.getState().fzlist[myStore.getState().counter - 1])
})

for(let i = 0; i < 100; i++) {
  myStore.dispatch(increment(1));
}

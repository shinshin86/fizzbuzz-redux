import { increment } from './actions';
import configureStore from './store';

const myStore = configureStore();

for(let i = 0; i < 100; i++) {
  myStore.dispatch(increment());
}

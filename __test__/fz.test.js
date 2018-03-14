import { createStore } from 'redux';
import increment from '../src/actions'
import myReducer from '../src/reducers'

const myStore = createStore(myReducer);

describe('Actions', () => {
  describe('Increment', () => {
    it('Increment counter value', () => {
      expect(1).toBe(increment().num)
      expect('INCREMENT').toBe(increment().type)
      expect(100).toBe(increment(100).num)
    })
  })
});

describe('Reducers', () => {
  describe('Increment', () => {
    it('get state of counter to increment', () => {
      expect(0).toBe(myStore.getState().counter)
      myStore.dispatch(increment(1))
      expect(1).toBe(myStore.getState().counter)
      myStore.dispatch(increment(100))
      expect(101).toBe(myStore.getState().counter)
    })
  })
});

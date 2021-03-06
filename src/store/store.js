import { createStore } from 'redux';
import itemReducer from '../reducers/itemReducer';

export default createStore(
  itemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

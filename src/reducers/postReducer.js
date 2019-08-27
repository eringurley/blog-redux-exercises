import { createStore } from 'redux';
import { CREATE_POST, DELETE_POST, createPost, deletePost } from '../actions/postActions';


const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload, action.payload + 1)
      ];
//     case UPDATE_POST:
//       return [
//         //get the pre stuff before slice
//         ...state.slice(0, action.payload.id), 
//         //update
//         {
//           ...state[action.payload.id],
//           body: action.payload
//         },
//         //grab all the things after update
//         ...state.slice(action.payload.id + 1)
//       ];
//     default:
//       return state;
  }
}

const store = createStore(reducer);

store.dispatch(createPost('testing title', 'body textz'));
console.log('phase 1, create a blog post', store.getState());

store.dispatch(deletePost('testing title', 'body textz'));
console.log('phase 2, delete a blog post', store.getState());

store.dispatch(createPost('new testing title', 'new body textz'));
console.log('phase 3, create a blog post', store.getState());

// store.dispatch(updatePost('update title', 'update body textz'));
// console.log('phase 4, update a blog post', store.getState());

console.log(store.getState());

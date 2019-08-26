import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case UPDATE_POST:
      return [
        //get the pre stuff before slice
        ...state.slice(0, action.payload.id), 
        //update
        {
          ...state[action.payload.id],
          body: action.payload.body
        },
        //grab all the things after update
        ...state.slice(action.payload.id + 1)
      ];
  }
}

import * as types from '../lib/actionTypes';

const initialState = 
  {
    posts:[],
    uri:''
  }

const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DESCRIPTION:
      return{ 
      ...state,
      posts: state.posts.concat({
        id: action.id,
        text: action.text,
        img: state.uri,
      })
      
    };
    case types.SELECT_IMG:
      return{ 
        ...state,
        uri:action.text,
        
      }

    default:
      return state
  }
}

export default Reduser
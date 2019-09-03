const initialState = 
  {
    posts:[],
    uri:''
  }

const DiscriptionReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DISCRIPTION':
      return{ 
      ...state,
      posts: state.posts.concat({
        id: action.id,
        text: action.text,
        img: state.uri,
      })
      
    };
    case 'SELECT_IMG':
      return{ 
        ...state,
        uri:action.text,
        
      }

    default:
      return state
  }
}

export default DiscriptionReduser
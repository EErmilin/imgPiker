let nextTodoId = 1
export const addDisc = (text) => {
    return{
        type: 'ADD_DISCRIPTION',
        id: nextTodoId++,
        text,
  
    }
    }

export const selectImg = (text) => {
        return{
            type: 'SELECT_IMG',
            text,
        }
        }
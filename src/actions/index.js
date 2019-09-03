import * as types from '../lib/actionTypes';

let nextTodoId = 1
export const addDescription = (text) => {
    return{
        type: types.ADD_DESCRIPTION,
        id: nextTodoId++,
        text,
    }
    }

export const selectImg = (text) => {
        return{
            type: types.SELECT_IMG,
            text,
        }
        }
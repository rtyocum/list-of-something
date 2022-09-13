import { ADD_ITEM, DELETE_ALL_ITEMS, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from "../types"

const listReducer = (state: any = {
    list: [],
    loading: false
}, action: any) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                loading: false,
                list: action.payload.list
            }
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case DELETE_ITEM:
            console.log(state)
            return {
                ...state,
                list: state.list.filter((e: any) => { return e._id !== action.payload })
            }
        case DELETE_ALL_ITEMS:
            return {
                ...state,
                list: []
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default listReducer;
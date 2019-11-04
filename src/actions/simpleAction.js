import axios from 'axios'
import  {
    FIRST_ACTION_1,
    FIRST_ACTION_2,
    FETCH_ITEMS,
    FETCH_ITEMS_SUUCESS,
    FETCH_ITEMS_ERROR
} from "../reducers/constants";


export const simpleAction = () => dispatch => {
    dispatch({ type: FIRST_ACTION_1, })
    setTimeout(() => {
        dispatch({ type: FIRST_ACTION_2, }) 
    }, 2000);
}

export const fetchItemsAction = () => dispatch => {
    dispatch({ type: FETCH_ITEMS})

    axios.get('http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1')
        .then( response => {
            dispatch({ type: FETCH_ITEMS_SUUCESS, payload: response.data})
        }) 
        .catch( () => {
            dispatch({ type: FETCH_ITEMS_ERROR })
        })
}
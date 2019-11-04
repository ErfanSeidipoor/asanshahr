import  {
    FIRST_ACTION_1,
    FIRST_ACTION_2,
    FETCH_ITEMS,
    FETCH_ITEMS_SUUCESS,
    FETCH_ITEMS_ERROR
} from "./constants";

const initialState = {
    comment:"This is a test for simple reducer",
    isLoading: false,
    isError: false,
    isSuccess: false,
    items: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FIRST_ACTION_1:
          return {
              comment:"action changes this message (FIRST_ACTION_1)"
          }
        case FIRST_ACTION_2:
            return {
                comment:"action changes this message (FIRST_ACTION_2)"
            }

        case FETCH_ITEMS:
            return {
                comment:"action changes this message (FIRST_ACTION_1)",
                isLoading: true,
                isError: false,
                isSuccess: false,
                items: [],
            }
        case FETCH_ITEMS_SUUCESS:
            return {
                comment:"action changes this message (FIRST_ACTION_1)",
                isLoading: false,
                isError: false,
                isSuccess: true,
                items: action.payload,
            }
        case FETCH_ITEMS_ERROR:
            return {
                comment:"action changes this message (FIRST_ACTION_1)",
                isLoading: false,
                isError: true,
                isSuccess: false,
                items: [],
            }
      default:
        return state
    }
}
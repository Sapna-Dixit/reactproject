import { BUY_BOOK } from "./bookType";

const initialState ={
    numOfBooks : 10,
}
const bookReducers = (state=initialState , action)=>{
    switch(action.type)
    {
        case BUY_BOOK:
            console.log("Buy book  action called...!!!")
            return{
                ...state,
                numOfBooks : state.numOfBooks-1,
            }
        default : return state;
    }

}
export default bookReducers;
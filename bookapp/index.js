const { redux, createStore, combineStore, combineReducers,applyMiddleware } = require("redux");
// const  applyMiddleware =  redux.applyMiddleware;


//const createStore =  redux.createStore;

// const initialState ={
//     numOfBooks : 10,
//     numOfPens  : 15
// }

// const Buy_Book = "Buy_Book";
// //action creator : wraping the action within a single function
// function buyBook()
// {
//     return {
//         //action
//         type : "Buy_Book",
//         payload : "My First  redux code"
//     }
// }

// function buyPen()
// {
//     return{
//         type :"Buy_Pen",
//         payload :"My Second Action"

//     }
// }

// const Reducer = (state=initialState, action)=>{
//     switch(action.type)
//     {
//         case "Buy_Book":
//             return{
//                 ...state,
//                 numOfBooks :state.numOfBooks-1,
//             }
//         break;
        
//         case "Buy_Pen":
//             return{
//                 ...state,
//                 numOfPens :state.numOfPens-1,
//             }
//         default : return state;
//     }
// }

// const store = createStore(Reducer);
// console.log("Initial State = ",store.getState());
// const unsubscribe = store.subscribe(()=>{console.log("updated state value ",store.getState())});
// store.dispatch(buyBook());
// store.dispatch(buyBook());
// store.dispatch(buyBook());
// store.dispatch(buyPen());
// store.dispatch(buyPen());
// store.dispatch(buyPen());
// unsubscribe();

const initialStateBook = {
    numOfBooks : 10,
}

const initialStatePen = {
    numOfPens : 15,
}

function buyBook()
{
    return{
        type : "Buy_Book",
        payload : "My first redux code",
    }
}

function buyPen()
{
    return{
        type : "Buy_Pen",
        payload : "My Second Redux code",
    }
}

const bookReducer = (state=initialStateBook ,action)=>{
    switch(action.type)
    {
        case "Buy_Book":
            return{
                ...state,
                numOfBooks : state.numOfBooks-1,
            }
        default :return state;
    }
}

const penReducer =  (state=initialStatePen , action)=>{
    switch(action.type)
    {
        case "Buy_Pen":
            return {
                ...state,
                numOfPens:state.numOfPens-2,
            }
        default : return state;
    }
};

const reducer = combineReducers({
    Book : bookReducer,
    Pen : penReducer
});

const logger = store =>{
    return next=>{
        return action=>{
            const  result  =next(action);
            console.log("middleware log ", result);
            return result;
        }
     
    }
}

const store  = createStore(reducer,applyMiddleware(logger));
console.log("Initial state of Book : ", store.getState());
console.log("Initial State = ",store.getState());

const unsubcribe = store.subscribe(()=>{console.log("Update state value of Book ", store.getState())})
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());

unsubcribe();
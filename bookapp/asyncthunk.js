const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios           = require('axios');


const initialState ={
    loading :false,
    users   :[],
    error   :''
}

//action
const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR   = 'USER_ERROR';

//action creator
 const userRequest =()=>{
     return{
         type :USER_REQUEST, 
     }
 }

 const userSuccess = (user) =>{
     return {
         type : USER_SUCCESS, 
         payload : user,
     }
 }

 const userError = (error) =>{
     return{
         type : USER_ERROR,
         payload : error,
     }
 };

 const reducer  = (state=initialState , action) =>{
   switch(action.type)
   {
       case 'USER_REQUEST' : return{
          ...state,
          loading:true,
       }
       break;
       case 'USER_SUCCESS' :return{
           ...state,
           loading : false,
            users  : action.payload, 
       }
       break;
       case 'USER_ERROR': return{
           loading :false,
           users : [],
           error : action.payload,
       }

    default : return state;
   }

 }

 //another actiion creator
 
 const fetchUser = ()=>{
     return function (dispatch){
         dispatch(userRequest())
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(response=>{
             //response.data
             const users = response.data.map(user=>user.name);
             dispatch(userSuccess(users));
         })
         .catch(error=>{
                //error.message
            dispatch(userError(error.message))
         })
     }
 }

 const store  = createStore(reducer, applyMiddleware(thunkMiddleware));
 const unsubscribe = store.subscribe(()=>{console.log(store.getState())});

 store.dispatch(fetchUser());
 //unsubscribe();
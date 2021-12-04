import { createStore } from "redux";
import  bookReducers  from "./book/bookReducers";

const store = createStore(bookReducers);

export default store;

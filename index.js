import store from "./redux/store.js";

const newState = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch({type: "ADD_CURRENT_TIME", payload: "11:11:11"});
newState();
store.dispatch({type: "CLEAR_ALL_TIMES"});

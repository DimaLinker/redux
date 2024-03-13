import store from "./redux/store.js";
import getCurrentTime from "./utils/getCurrentTime.js";


const addTimeBtn = document.getElementById("addTime");
addTimeBtn.addEventListener("click", () => {
    store.dispatch({
        type: "ADD_CURRENT_TIME", payload: getCurrentTime()});
});

const timeList = document.getElementById("timeList");
store.subscribe(() => {
    timeList.innerHTML = store.getState().map(time => {
        return `<li>${time}</li>`
    }).join("");
})


const clearTimesBtn = document.getElementById("clearTimes");
clearTimesBtn.addEventListener("click", () => {
    store.dispatch({type: "CLEAR_ALL_TIMES"});
});







// const newState = store.subscribe(() => {
//     console.log(store.getState())
// })
// store.dispatch({type: "ADD_CURRENT_TIME", payload: "11:11:11"});
// newState();
// store.dispatch({type: "CLEAR_ALL_TIMES"});

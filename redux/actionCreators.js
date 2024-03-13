import getCurrentTime from "../utils/getCurrentTime.js";



export function addCurrentTime () {
    return {
        type: 'ADD_CURRENT_TIME',
        payload: getCurrentTime()
    }
}


export function clearTimes () {
    return {
        type: 'CLEAR_ALL_TIMES'
    }
}


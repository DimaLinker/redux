function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();

    const currentTime = `${hours}:${minutes}:${seconds}`
    return currentTime;
}

export default getCurrentTime
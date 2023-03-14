function debounce(func, seconds) {
    let timerId = null;

    return function(event) {
        clearTimeout(timerId);
        timerId = setTimeout(func, seconds, event);
    }

   

}
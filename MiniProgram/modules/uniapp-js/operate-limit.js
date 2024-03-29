/**
 * 防抖
 * 定时器实现 立即防抖
 */
function debounceGenerater(){
    let timer = null;
    return (wait, funct, ...args) => { 
        clearTimeout(timer);
        timer = setTimeout(() => funct(...args), wait);
    };
}


/**
// 防抖
// 定时器实现 非立即防抖
function debounceGenerater(){
    var timer = null;
    return (wait, funct, ...args) => {
        if(!timer) funct(...args);
        clearTimeout(timer);
        timer = setTimeout(() => timer = null, wait);
    }
}
 */

/**
 * 节流
 * 时间戳实现
 */
function throttleGenerater(){
    let previous = 0;
    return (wait, funct, ...args) => {
        const now = +new Date();
        if(now - previous > wait){
            funct(...args);
            previous = now;
        }
    };
}

/*
// 节流
// 定时器实现
function throttleGenerater(){
    var timer = null;
    return (wait, funct, ...args) => {
        if(!timer){
            funct(...args);
            timer = setTimeout(() => timer = null, wait);
        }
    }
}
 */

export { debounceGenerater, throttleGenerater };
export default { debounceGenerater, throttleGenerater };

// to set warning before submit empty input 
export const setWarning = (target) => {
    target.style.borderBottom = "1px solid red"
    setTimeout(() => {
        target.style.borderBottom = "1px solid #444"
    }, [1000])
}
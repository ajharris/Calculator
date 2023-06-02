export default function Button({current, setCurrent, children}){
    function handleButtonClick(){
        console.log(this)
            if (current === 0){
                setCurrent(children)
            }
            else{
                setCurrent(current + children)
            }
        

    }

    return <button onClick={handleButtonClick}>{children}</button>
}
export default function Button(props){
    function handleButtonClick(){
        console.log(props.children)
    }

    return <button onClick={handleButtonClick}>{props.children}</button>
}
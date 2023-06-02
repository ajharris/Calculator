import Button from './Button.js'
export default function Panel({current, setCurrent}){

    return (<>

        <table>
            <tr><td><Button current={current} setCurrent={setCurrent}>1</Button></td> <td><Button current={current} setCurrent={setCurrent}>2</Button></td> <td><Button current={current} setCurrent={setCurrent}>3</Button></td></tr>
            <tr><td><Button current={current} setCurrent={setCurrent}>4</Button></td> <td><Button current={current} setCurrent={setCurrent}>5</Button></td> <td><Button current={current} setCurrent={setCurrent}>6</Button></td></tr>
            <tr><td><Button current={current} setCurrent={setCurrent}>7</Button></td> <td><Button current={current} setCurrent={setCurrent}>8</Button></td> <td><Button current={current} setCurrent={setCurrent}>9</Button></td></tr>
            <tr><td><Button current={current} setCurrent={setCurrent}>0</Button></td> <td><Button current={current} setCurrent={setCurrent}>.</Button></td> <td><Button current={current} setCurrent={setCurrent} className={'op'}>=</Button></td></tr>
        </table>
        <table>
            <tr><td><Button current={current} setCurrent={setCurrent} className={'op'}>+</Button></td><td><Button current={current} setCurrent={setCurrent} className={'op'}>-</Button></td> </tr>
            <tr><td><Button current={current} setCurrent={setCurrent} className={'op'}>/</Button></td><td><Button current={current} setCurrent={setCurrent} className={'op'}>*</Button></td></tr>
        </table>
        </>
    )
}
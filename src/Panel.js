import Button from './Button.js'
export default function Panel(props){

    return (<>

        <table>
        <tr><td><Button className='int'>1</Button></td> <td><Button className='int'>2</Button></td> <td><Button className='int'>3</Button></td></tr>
        <tr><td><Button className='int'>4</Button></td> <td><Button className='int'>5</Button></td> <td><Button className='int'>6</Button></td></tr>
        <tr><td><Button className='int'>7</Button></td> <td><Button className='int'>8</Button></td> <td><Button className='int'>9</Button></td></tr>
        <tr><td><Button className='int'>0</Button></td> <td className='op'><Button>.</Button></td> <td><Button className='op'>=</Button></td></tr>
        </table>
        </>
    )
}
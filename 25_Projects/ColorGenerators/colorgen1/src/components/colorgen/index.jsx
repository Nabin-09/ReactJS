import { useState } from "react"






export default function RandomColor(){

    const [typeOfColor , setTypeOfColor] = useState('hex');
    const [color , setColor] = useState('#000000')

    

    return (
    <div  style = {{
        width : '100vw',
        height : '100vh',
        backgroundColor : color,
        overflow : 'hidden',

        
    }} className="container">
    
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={handleCreateRandomColor}>Create Random color</button>


    </div>
    );

}
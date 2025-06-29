import { useState } from "react"






export default function RandomColor(){

    const [typeOfColor , setTypeOfColor] = useState('hex');
    const [color , setColor] = useState('#000000')

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleCreateRandomHexColor (){
        const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i =0 ; i < 6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }    


     function handleCreateRandomRgbColor (){

    }    

    return (
    <div  style = {{
        width : '100vw',
        height : '100vh',
        backgroundColor : color,
        overflow : 'hidden',

        
    }} className="container">
    
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={() => typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>
        Create Random color
        </button>



    </div>
    );

}
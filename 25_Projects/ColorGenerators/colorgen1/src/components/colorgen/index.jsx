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


function handleCreateRandomRgbColor () {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    
    setColor(rgbColor);       
    console.log(rgbColor);   
}


    return (
    <div  style = {{
         position: 'fixed',
        top: 0,
        left: 0,
        width : '100%',
        height : '100%',
        backgroundColor : color,
        overflow : 'hidden',
        
    }} className="container">
    
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={() => typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>
        Create Random color
        </button>

        <div style={{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            color : '#fff',
            fontSize : '60px',
            marginTop : '50px',
            flexDirection : 'column',
            gap : '40px',
            overflow: 'hidden'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'}</h3>
            <h1>{color}</h1>

        </div>


    </div>
    );

}
// This marks the end of this mini project 


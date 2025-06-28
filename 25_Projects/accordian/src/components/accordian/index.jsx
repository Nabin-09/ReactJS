import data from "./data";
import { useState } from "react";



export default function Accordian (){
    function handleSingleSelection(getCurrentId){
    console.log(getCurrentId);
    setSelected(getCurrentId)
}
const [selected , setSelected] = useState(null);
     return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map( dataItem => <div className="item">
                    <div  onClick= {()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className="content">
                            {dataItem.answer}
                        </div>
                        : null
                    }
                </div>) 
                : <div>No Data found !</div>
            }
        </div>
    </div>
}
import React, { use } from "react";
import './styles.css'
import data from './data.js'
import { useState } from "react";


export default function Accordian (){

    function handleSingleSelection (getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const [selected , setSelected] = useState(null);

    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem => 
                    <div className="item">
                        <div className="title" onClick={()=>handleSingleSelection(dataItem.id)}>
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
                    </div>
                )
                : <div>Data not Found</div>
            }
        </div>
    </div>
}
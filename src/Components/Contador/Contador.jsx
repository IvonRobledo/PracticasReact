import {React, useState} from 'react';
import "../../Styles/PresentationCard.css";

const Contador = (props) => {
    const [num, setNum] = useState(0);
    
    return(
        <div className="container_practicas purple_container">
            <div className="fixed_width">
                <h1 className="main_text">{num}</h1>
                <button className="button_primary" onClick={()=>{setNum(num+1)}}>Incrementar</button>
                <button className="button_primary" onClick={()=>{setNum(num-1)}}>Decrementar</button>
            </div>
        </div>
    )
}

export default Contador;
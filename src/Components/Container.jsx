import {useState} from 'react';
import "../Styles/PresentationCard.css";
import InputText from './InputText';
import Contador from './Contador';

const Container = () => {
    const [text, setText] = useState('Escribe algo...');
    const [num, setNum] = useState(0);

    const updateText = (e) => {
        setText(e.target.value);
    }

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreaseNum = () => {
        if(num>0){
            setNum(num - 1);
        }
    }
    
    return(
        <div className="container_practicas yellow_container">
            <div className="fixed_width">
                <InputText text={text} updateText={updateText} />
                <br/>
                <br/>
                <Contador num={num} increaseNum={increaseNum} decreaseNum={decreaseNum}/>
            </div>
        </div>
    )
}

export default Container;
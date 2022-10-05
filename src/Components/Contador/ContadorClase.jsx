import React from 'react';
import "../../Styles/PresentationCard.css";

class ContadorClase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }
    }

    render(){
        const {num} = this.state;
        return (
        <div className="fixed_width">
            <h1 className="main_text">{this.state.num}</h1>
            <button className="button_primary" onClick={()=>{this.setState({num: num+1})}}>Incrementar</button>
            <button className="button_primary" onClick={()=>{this.setState({num: num-1})}}>Decrementar</button>
        </div>
        )
    }
}
export default ContadorClase;
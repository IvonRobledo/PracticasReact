const Contador = ({ num, increaseNum, decreaseNum }) => {
    return(
        <div className="fixed_width">
            <h1 className="main_text">{num}</h1>
            <button className="button_primary" onClick={increaseNum}>Incrementar</button>
            <button className="button_primary" onClick={decreaseNum}>Decrementar</button>
        </div>
    )
}

export default Contador;
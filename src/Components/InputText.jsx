const InputText = ({ updateText, text }) =>{
    return (
        <div>
            <input type="text" onChange={updateText}/>
            <h3 className="contact_text">{text}</h3>
        </div>
    )
}

export default InputText;
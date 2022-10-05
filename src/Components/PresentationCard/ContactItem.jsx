import {React} from 'react';

const ContactItem = (props) => {
    return(
        <p className="contact_text"><span>{props.itemData.icon}</span> {props.itemData.text}</p>
    )
}

export default ContactItem;
import {React, Fragment, useState} from 'react';
import { BiCodeAlt, BiRightArrowCircle, BiLeftArrowCircle, BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
import "../../Styles/PresentationCard.css";
import ContactItem from "./ContactItem";

const PresentationCard = (props) => {
    const [frontSide, setFrontSide] = useState(true);
    const contactItems = [
        {
            key: 'phone',
            icon: <BiPhone/>,
            text: '8116120420'
        },
        {
            key: 'email',
            icon: <BiEnvelope/>,
            text: 'ivon.robledo@gmail.com'
        },
        {
            key: 'location',
            icon: <BiMap/>,
            text: 'Nuevo León, México'
        }
    ]
    return(
        <div className="container_practicas pink_container">
        {
            frontSide ?
                <div className="fixed_width">
                    <BiCodeAlt className="main_icon"/> 
                    <h1 className="main_text">Ivon Olivares</h1>
                    <p className="secondary_text">Software Developer </p>
                </div>
            :
                <div className="fixed_width">
                    <h1 className="contact_text">Contact information</h1>
                    <div className="align_left">
                        {
                            contactItems.map((item) =>{
                                return <ContactItem key={item.key} itemData={item}/>
                            })
                        }
                    </div>
                </div>
        }
        <span className="secondary_text return_text" onClick={(e) => {setFrontSide(!frontSide)}}>
            {
                frontSide ?
                    <BiRightArrowCircle  className="secondary_icon"/>
                :
                    <BiLeftArrowCircle  className="secondary_icon"/>
            }
        </span>
        </div>
    )
}

export default PresentationCard;
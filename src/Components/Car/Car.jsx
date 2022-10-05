import {useState} from 'react';
import "../../Styles/Car.css";
import { FaCarSide, FaCar } from "react-icons/fa";

const Car = () => {

    const [datos, setDatos] = useState({
        color_id: 1,
        color: 'Rojo',
        color_value: 'red',
        modelo: 'Mirage',
        marca: 'Mitsubishi',
        año: 2019,
        nombre: ''
    });

    const años = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

    const colores = [{name: 'Rojo', value: '#99241c'},
                    {name: 'Verde', value: '#1d8f2e'},
                    {name: 'Negro', value: '#1b1f1e'},
                    {name: 'Azul', value: '#3c38a6'},
                    {name: 'Rosa', value: '#c449be'},
                    {name: 'Celeste', value: '#55c9d9'}];

    const updateAño = (e) => {
        setDatos({...datos, año: e.target.value});
    }

    const updateColor = (e) => {
        var index = datos.color_id === 5 ? 0 : datos.color_id + 1;
        setDatos({...datos, color_id: index, color: colores[index].name, color_value: colores[index].value});
    }

    const updateNombre = (e) => {
        setDatos({...datos, nombre: e.target.value});
    }
    
    return(
        <div className="container_practicas container_blue">
            <div className="fixed_width_car">
                <h1 className="main_text"><FaCarSide className="main_icon"/> Mi auto</h1>
                <div className="container">
                    <div className="width_50">
                        <h3 className="subheader">Información:</h3>
                        <ul>
                            <li><strong>Color: </strong> {datos.color} <label style={{color: datos.color_value}}><FaCar/></label></li>
                            <li><strong>Modelo: </strong>{datos.modelo}</li>
                            <li><strong>Marca: </strong>{datos.marca}</li>
                            <li><strong>Año: </strong>{datos.año}</li>
                            <li><strong>Nombre: </strong>{datos.nombre}</li>
                        </ul>
                    </div>
                    <div className="width_50">
                        <h3 className="subheader">Customización:</h3>
                        <label>Presiona para cambiar el color:</label>
                        <button type="button" className="button_primary" onClick={(e) => updateColor(e)}>Click</button>
                        <br/>
                        <label>Selecciona el modelo:</label>
                        <select type="button" onChange={(e) => updateAño(e)} value={datos.año}>
                            {
                                años.map((año, index) => (<option key={index} value={año}>{año}</option>))
                            }
                        </select>
                        <br/>
                        <label>Define un nombre para tu auto:</label>
                        <input type="text" onInput={(e) => updateNombre(e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car;
import { useEffect, useState } from 'react';
import "../../Styles/Productos.css";
import { productos } from "../../Utils";

const ProductosContainer = () => {
    const [categorias, setCategorias] = useState([]); 
    
    useEffect(() => {
        setCategorias(productos.reduce((grouped_array, current_item) => {
            const current_categoria = current_item['category'];
    
            if(!grouped_array.includes(current_categoria)){
                grouped_array.push(current_categoria);
            }
            
            return grouped_array;
        }, []));
    }, []);

    return(
        <div className="container_practicas container_green">
            <div className="fixed_width">
                <h1 className="main_text">Productos</h1>
                {
                    categorias.map((categoria, index) => {
                        return (
                            <div key={index} className="container">
                                <h1 className="subheader">{categoria}</h1>
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productos.map((producto, index) => {
                                                return(
                                                categoria === producto.category ?
                                                    <tr key={producto.name}><td>{producto.name}</td><td>{producto.price}</td></tr>
                                                :
                                                    ''
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>   
                            </div>
                        )
                    })
                }
            </div>  
        </div>
    )
}

export default ProductosContainer;
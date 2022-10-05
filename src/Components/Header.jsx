import "../Styles/Header.css";
import Home from './Home';
import PresentationCard from './PresentationCard';
import Contador from './Contador/Contador.jsx';
import Container from './Container';
import TodoContainer from './Todo/TodoContainer';
import Car from './Car/Car';
import ProductosContainer from './Productos/ProductosContainer';
import { NavLink, Routes, Route } from 'react-router-dom';

const Header = () => {
    
    return(
        <div className="container_practicas">
            <header className="topnav">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Home</NavLink>
                <NavLink to="/presentation_card" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Presentation Card</NavLink>
                <NavLink to="/contador" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Contador</NavLink>
                <NavLink to="/container" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Container</NavLink>
                <NavLink to="/todo" className={({ isActive }) => (isActive ? 'activeLink' : '')}>TODO</NavLink>
                <NavLink to="/car" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Car</NavLink>
                <NavLink to="/productos" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Productos</NavLink>
            </header>
            <div className="container_practicas">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/presentation_card" element={<PresentationCard/>}></Route>
                    <Route path="/contador" element={<Contador/>}></Route>
                    <Route path="/container" element={<Container/>}></Route>
                    <Route path="/todo" element={<TodoContainer/>}></Route>
                    <Route path="/car" element={<Car/>}></Route>
                    <Route path="/productos" element={<ProductosContainer/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Header;
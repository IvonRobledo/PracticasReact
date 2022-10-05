import './App.css';
import {React, Fragment} from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (  
      <Fragment>
        {/*<PresentationCard/>
        <Contador/>
      <ContadorClase/>
      <Layout header="Header, llega en su propia prop">
        Este texto debe estar en un div chiquito en el centro, a través de la prop de children :)
      </Layout>
      <Container/>
      <TodoContainer/>
      <Car/>
      <ProductosContainer/>*/}
      <Router>
        <div><Header/></div>
          
         

        </Router>
    </Fragment>
    
  );
}

export default App;

import React from 'react';

import "../styles/styles.scss"
import Course from './Pages/Course'
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid';
import MainMenu from './Organisms/MainMenu';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import History from './Pages/History';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>   
    <Route path="/" exact component={Home} />
    <Route path="/cursos/:id"  component={Course} />
    <Route path="/cursos" component={CourseGrid} />
    <Route path="/historial/:valor" component={History} />
    <Route path="/historial" component={History} />
    <Route path="/formulario"  component={() => <Form name="pagina de contacto"/>} />
    <Route  component={()=>(
        <div className="ed-grid">
         <h1>Error 404</h1>
         <span>Pagina no encontrada</span>
        </div>
     )} />
    </Switch>

    </Router>
);
export default App;

//Reglas JSX
//1: toda etiqueta debe cerrarce
//2: Los componentes deben devolver UN componente padre
//3: Apoyarse de los Fragments cuando se necesita devolver 2 elementos
//4: Fragments => <> hijos </>
//5: class => className
//6: for => htmlFor

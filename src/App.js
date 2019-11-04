import React from 'react';

import "./styles/styles.scss"
//import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'

const App = () => (
  <>
    <Banner />
    <Formulario />

  </>
)

export default App;

//Reglas JSX
//1: toda etiqueta debe cerrarce
//2: Los componentes deben devolver UN componente padre
//3: Apoyarse de los Fragments cuando se necesita devolver 2 elementos
//4: Fragments => <> hijos </>
//5: class => className
//6: for => htmlFor

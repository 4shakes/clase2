import React from 'react';

import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="esto es un banner"  src="https://ep01.epimg.net/elpais/imagenes/2017/07/24/paco_nadal/1500918498_125283_1500930190_noticia_normal_recorte1.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="http://localhost:3000/" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso 
  title="React desde Cero" 
  image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png"
  tutor="juanita"
  price="20usd"
  />
  <Curso 
  title="HTml desde cero" 
  image="https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t"
  tutor="jayro"
  price="free"
  />
  <Curso />
  <Curso />
  <Curso />
  <Curso /> 
</div>
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

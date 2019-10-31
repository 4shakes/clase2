import React from 'react';

import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
  {
    "titulo": "typescript",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/typescript.png",
    "price": 40,
    "profesor": "jayro galindo"
  },
  {
    "titulo": "Markdow",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/markdown-poster.png",
    "price": 30,
    "profesor": "alvaro felipe"
  },
  {
    "titulo": "Pug desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/cursos-pug.jpg",
    "price": 20,
    "profesor": "luis felipe"
  },
  {
    "titulo": "html desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "profesor": "alexy gomez"
  }
]



const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner"  src="https://ep01.epimg.net/elpais/imagenes/2017/07/24/paco_nadal/1500918498_125283_1500930190_noticia_normal_recorte1.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de edteam</p>
        <p>Tu futuro te esta esperando</p>
        <a href="http://localhost:3000/" className="button">Suscribete</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
 {
   cursos.map(curso => <Curso title={curso.titulo} image={curso.image} price={curso.price} tutor={curso.profesor} />)
 }
 
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

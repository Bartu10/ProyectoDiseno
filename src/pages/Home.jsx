import React from 'react'
import BestChessMatch from '../images/Chessmatch.gif'
import reyMatch from '../images/Rey.gif'
import imagen_inicio from '../images/img-ini.png'

const Home = () => {
  return (
<div className='main'>
    <section className="section1">
    <img src={imagen_inicio} className="imginicio" />
    <p className="textoinicio">
        <span>
            EL TEMPLO DEL AJEDREZ
        </span>
    </p>
    </section>
    <section className="section2">
        <h1 className="textosubmenu">ALGUNAS PARTIDAS FAMOSAS</h1>
        <div className="tableros">
        <div className="separado">
        <h2>Kasparov (2851 ELO)</h2>
        <img className="gifs" src= {BestChessMatch} />
        <h2>Topalov (2690 ELO)</h2>
        </div>
        <div className="separado">
        <h2>Duque de Brunswick</h2>
        <img className="gifs" src={reyMatch} />
        <h2>Paul Morphy (2690 ELO)</h2>
        </div>
        </div>        
        </section>
        </div>
  )
}

export default Home
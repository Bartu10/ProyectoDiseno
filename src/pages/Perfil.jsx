import React from 'react'
import IconUser from '../images/6378141.png'
import pen from '../images/pen.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import twitter from '../images/gorjeo.png' 





const Perfil = () => {
  debugger
  let registered = localStorage["formData"]
  if(registered == undefined) 
  {registered = {"username":"Invitado", "Pais":"ES", "edad":0  }}
  else{
    registered = JSON.parse(localStorage["formData"])
  }

  
  

  return (
    <div className='perfil'>
    <section>
    <div>
        <img className="iconUser" src={IconUser} />
        <h3>{registered["username"]}</h3>
    </div>
    <div className="eloRank"><h3>ELO: 400</h3><img className='flag' src={`https://flagsapi.com/${registered["Pais"]}/shiny/64.png`}></img><h3>{`EDAD:${registered["edad"]}`}</h3><h3 className="rank">Principante</h3></div>
    <div className='infoPersonal'>
        <article>
        <h4>Sobre mí: <img className="icons" src={pen} /></h4>
        <span>Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        Soy javier y juego al ajedrez desde Soy javier y juego al ajedrez desde 
        </span>
        </article> 
        <article>
            <h4>Redes Sociales: <img className="icons" src={pen} /></h4>
            <img src={instagram} />javi10
            <img src={twitter} />javi10
            <img src={facebook} />javi10
        </article>
    </div>
</section>
</div>
  )
}

export default Perfil

import React from 'react'
import { useState, useEffect } from 'react';



const Favoritos = () => {
  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('jugador')) || {});
   }, []);


  return (
<div className='Jugador'>
{
      favorites !== null || favorites !== undefined ? (
        <div className='perfil'>
            <img className="jugador" id ="avatar" src={favorites.avatar} alt="Avatar"></img>
            <h2>{favorites.rank}</h2>
            <h2>{favorites.username}</h2>
            <h2>{favorites.title}</h2>
            <h2>Status : {favorites.status}</h2>
            </div>
                  ) : ("Cargando")   
                }
        </div>
        

        
  )
  
  

      }
export default Favoritos
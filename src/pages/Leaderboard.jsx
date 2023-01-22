import { getLeaderBoard } from "../api";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getModes } from "../api"


const Leaderboard = () => {
    const [modes, setModes] = useState()
    const [modo, setModo] = useState("battle"); 
    const [jugadores, setJugadores] = useState(null);
    const [premium, setPremium] = useState(false);
    const [search, setSearch] = useState("");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2000000);

    
    const handleChange = (e) => {
      setModo(e.target.value)
    }

    
    const searcher = (e) => {
      setSearch(e.target.value)
    }



    let results = []
    if(!search)
    {
      
      let numbers = []
        for (let x in jugadores){
          if (jugadores[x].score > min && jugadores[x].score < max)
          numbers.push(jugadores[x])
        }
        results = numbers
}
    
else{

  let numbers = []
  numbers = jugadores.filter( (dato) =>
  dato.username.toLowerCase().includes(search.toLocaleLowerCase()))

  for (let x in numbers){
    if (numbers[x].score > min && numbers[x].score < max)
    results.push(numbers[x])
  }
  numbers = jugadores

    }

    
    const premiumGet = () => {
      setPremium(!premium)
    }



  useEffect(() => {
    getLeaderBoard(setJugadores, modo)
  },[modo])

  useEffect(() => {
    getModes()
  })


  let premiums = []
    for (let juga in results){
      if (results[juga].status == "premium"){
        premiums.push(results[juga])
      }
    }



    const minGet = (e) => {
      setMin(e.target.value)
    }

    const maxGet = (e) => {
      setMax(e.target.value)
    }
  

  return (
    <div className="Leaderboard">
<h1>{modo}</h1>
 
<select className="modo" value={modo} onChange={handleChange}>
  <option value="battle">battle</option>
  <option value="daily">daily</option>
  <option value="daily960">daily960</option>
  <option value="live_blitz">live_Blitz</option>
  <option value="live_blitz960">live_blitz960</option>
  <option value="live_bughouse">live_bughouse</option>
  <option value="live_bullet">live_bullet</option>
  <option value="live_crazyhouse">live_crazyhouse</option>
  <option value="live_kingofthehill">live_kingofthehill</option>
  <option value="live_rapid">live_rapid</option>
  <option value="rush">rush</option>
  <option value="tactics">tactics</option>
</select>

<form>


<label>
<input value={search} onChange={searcher} type="text" 
placeholder="Search" className="Buscador" />
</label>

<label>
<h5>Solo Premium</h5><input onChange={premiumGet} value={premium} type="checkbox" />
</label>


<label className="labelrang">
<div className="bardata">{min} - {max}</div>
<div className="rangos">
Minimo
0 <input type="range" onChange={minGet} value={min} min="0" max="2000000" /><br />2000000
</div>
<div className="rangos">
Maximo<br />
0 <input type="range" onChange={maxGet} value={max} min="0" max="2000000" /><br />2000000
</div>
</label>

</form>


<table>

<tr className="LeaderBoard">
  <th>Rank</th>

  <th>UserName</th>

  <th>Avatar</th>

  <th>Score</th>

</tr>
   
{


  (premium === false ?
  
  (jugadores !== null ? (
            results.map(jugador => (
                
<tr>
  
  <td>{jugador.rank}</td>

  <td><Link to={`/Leaderboard/${jugador.username}`}>{jugador.username}</Link></td>

  <td className="avatar"><img src={jugador.avatar} /></td>

  <td>{jugador.score}</td>


</tr>
  
  ))
):("Cargando...")) 

: 

(jugadores !== null ? (

  premiums.map(jugador => (
                
<tr>
  
  <td>{jugador.rank}</td>

  <td><Link to={`/Leaderboard/${jugador.username}`}>{jugador.username}</Link></td>

  <td className="avatar"><img src={jugador.avatar} /></td>

  <td>{jugador.score}</td>


</tr>
  
  ))
):("Cargando...")))}

</table>                   
    </div>
  )}
export default Leaderboard
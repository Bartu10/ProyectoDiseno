
import axios from 'axios'


const getModes = async (state) => {
    const peticion = await axios.get('https://api.chess.com/pub/leaderboards')
    state(peticion.data)
}


const getLeaderBoard = async (state, modo) => {
    const peticion = await axios.get('https://api.chess.com/pub/leaderboards')
    state(peticion.data[modo])
}


const getPlayer = async (username, state) => {
    const peticion = await axios.get(`https://api.chess.com/pub/player/${username}`)
    state(peticion.data)    
}







export {
    getModes,
    getLeaderBoard,
    getPlayer,
}


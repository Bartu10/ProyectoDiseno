import Vectorrrss from "../images/Vectorrrss.png"
import Vectorrrss2 from "../images/Vectorrrss-1.png"
import insta from "../images/Insta.png"

const DownBar = () => {
    return(
        <div>
        <footer>
        <span>
        @ 2022 Cádiz ESP, Inc All rights reserved.
        </span>
        <div className="rrss">
            <img src= {Vectorrrss}/>   
            <img src={Vectorrrss2} />
            <img src={insta} />
        </div>
        </footer>
        </div>
    )
}


export default DownBar
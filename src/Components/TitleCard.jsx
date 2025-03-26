import './TitleCard.css'
import data from './Data.json'
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from "react-icons/md";
import FavoriteStore from './FavStore.jsx';

export default function Tile({TiCardNum}){

    const TitleName = data[TiCardNum]?.Title || "404";
    const Description = data[TiCardNum]?.Description || "404";
    const Price = data[TiCardNum]?.Price || "404";
    const ImageLocation = data[TiCardNum]?.Image || "/404.png";

    const match = TiCardNum.match(/\d+/); 
    TiCardNum = match ? parseInt(match[0], 10) : null;

    const retrievedIDs = [];
    for (let i = 0; i < 5; i++) {
        retrievedIDs.push(parseInt(localStorage.getItem(`CardID${i}`), 10));
    }

    if (retrievedIDs.includes(TiCardNum)){
        var Favorite = true;
    }

    return(
        <>
        <div className="Tile">
        
            <div className="Square">
            <div className='Circle-Height'>
            <img className="Circle" src={ImageLocation}  onError={(e) => { e.target.onerror = null; e.target.src ="/404.png"; }} ></img>
            </div>
                <div className="Text">
                    <h1>{TitleName}</h1>
                    <h2>{Description}</h2>
                    <h3>{Price}</h3>
                </div>
                <div className='BttsTtleCrd'>
                <button className="HeartButton" onClick={() => FavoriteStore(TiCardNum)}> 
                <div className='Icon'>{Favorite ? <FaHeart style={{ color: "#aa5565"}} /> : <FaRegHeart />}</div>
                
                </button>
                <button className="Basketbutton">
                    <div className='Icon'><MdOutlineShoppingCart /></div>
                </button>
                </div>
            </div>
        </div>
       
        </>
    )
}
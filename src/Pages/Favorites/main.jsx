import TitleCard from "../../Components/TitleCard.jsx"
import "./main.css"
import Setcard from "../../Components/FavStore.jsx"
import IDCardFetch from "../../Components/FavStore.jsx"

export default function Favorites() {


    return (
      <>
      
      <div className="Tempory">
        <div className="TitleCardGrid">
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card"+localStorage.getItem("CardID0")}/></div>
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card"+localStorage.getItem("CardID1")}/></div>
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card"+localStorage.getItem("CardID2")}/></div>
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card"+localStorage.getItem("CardID3")}/></div>
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card"+localStorage.getItem("CardID4")}/></div>
        </div>
        <a href="/MainMenu">
        <button className="MainButton">
          <div className="MainButtonText">Main</div>
          </button>
          </a>
        </div>
      </>
    )
  }
  

  
import "./main.css"
import "./topsection.css"
import "./mostpopular.css"
import "./dailyrec.css"
import "./endpart.css"
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import TitleCard from "../../Components/TitleCard.jsx"
import KeenScroller from "../../Components/Scroller.jsx"
import data from "../../Components/Data.json"
import { MdOutlineShoppingCart } from "react-icons/md";

export default function MainMenu() {
  const TopImageLocation = data["Card8"]?.Image || "/404.png";
  const RecomendedLocation = data["Card19"]?.Image || "/404.png";

    return (
      <>
      <div className="parent">
        <div className="SecondaryBackGround">
          <div className="MainSection">
                  <div className="Title">
                      <h1>My Food Menu!</h1>
                        <h2>!!Concept!!</h2>
                  </div>
                  <div className="Text-MainFood">Welcome To My Food Website! By Sam</div>
                
                <div className="Rectangle-TopRight">
                   <div className='Icon'><MdOutlineShoppingCart /></div>
                </div>
                <img className="Circle-MainFood" src={TopImageLocation}></img>
 
          <div className="Menu-Button">
          <a href="/FoodMenu">  
           <button className="ViewMenu">
             <div className="TextViewMenu">View Menu</div>
             <div className="Arrow"><FaArrowRight /></div>
            </button>
            </a>
            </div>


            <a href="/Favorites">
             <button className="Fav-Button">
             <div className="TextViewMenu" >Favorites</div>
             <div className="Heart"><FaRegHeart /></div>
             </button>
             </a>
          </div>
        
        <div className="Most-Popular">
          <div className="TitleCardGrid">
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card11"}/></div>
          <div className="TitleCardSize"><TitleCard TiCardNum={"Card9"}/></div>
          </div>
          <div className="Text-MostPopular">
            <h1>Most Viewed of The week!</h1>
            <h2>Curabit fermentum, lerem et finibus bibendum, dolor nulla consequat neque, in fermentum erat orci eu tortor. maecenas sed quam mi. Donec sed sollicitudin lacus, at tristique nuc. Fusce tristique turpis magna, in bibendum quam egestas sit amet. Cras sit amet porttitor lectus.</h2>
          </div>
        </div>

        <div className="dlyrecomed">
          <div className="Text-DlyRec">
            <h1>Daily Recommendation</h1>
            <h2>Curabit fermentum, lerem et finibus bibendum, dolor nulla consequat neque, in fermentum erat orci eu tortor. maecenas sed quam mi. Donec sed sollicitudin lacus, at tristique nuc. Fusce tristique turpis magna, in bibendum quam egestas sit amet. Cras sit amet porttitor lectus.</h2>
          </div>
          <img className="Daily-Circle" src={RecomendedLocation}/>

        </div>
          <KeenScroller/>

          <div className="Header-Bottom">
            <div className="Text-Header-Bottom">
              <p>Loren ipsum</p>
              <h1>Loren ipsum</h1>
            </div>
            <div className="Line"></div>
            <div className="Box-Text-Header-Bottom">
            <h2>Loren ipsum dolor sit smet, consectetur adipiscing elit. Maecenas dui purus, posuere id condimentum vitae, dapibus in</h2>
            </div>
            <div className="Line"></div>
            <div className="Icon-Yay"></div>
            <div className="BioGraphic">

              <h1>Loren ipsum</h1>
              <h2>Loren ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui purus, posuere id</h2>
            </div>


          </div>








        </div>
      </div>
      </>
    )
  }
  

  
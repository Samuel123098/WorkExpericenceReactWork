import "./main.css"
import "./topsection.css"
import "./mostpopular.css"
import "./dailyrec.css"
import "./endpart.css"
import TitleCard from "../../Components/TitleCard.jsx"
import KeenScroller from "../../Components/Scroller.jsx"

export default function MainMenu() {
    return (
      <>
      <div className="parent">
        <div className="SecondaryBackGround">


          <div className="MainSection">
                  <div className="Title">
                      <h1>Title</h1>
                        <h2>Subtitle</h2>
                  </div>
                  <div className="Text-MainFood">Lorem ipsum dolor sit amet, consectetur</div>
                
                <div className="Rectangle-TopRight"></div>
                <div className="Circle-MainFood"></div>
               

           <button className="ViewMenu">
             <div className="TextViewMenu">View Menu</div>
             <div className="Arrow"></div>
            </button>
             <div className="Button-Box"></div>
          </div>
        
        <div className="Most-Popular">
          <div className="TitleCardGrid">
          <div className="TitleCardSize"><TitleCard/></div>
          <div className="TitleCardSize"><TitleCard/></div>
          </div>
          <div className="Text-MostPopular">
            <h1>Loren ipsum dolor sit amet consectetur</h1>
            <h2>Curabit fermentum, lerem et finibus bibendum, dolor nulla consequat neque, in fermentum erat orci eu tortor. maecenas sed quam mi. Donec sed sollicitudin lacus, at tristique nuc. Fusce tristique turpis magna, in bibendum quam egestas sit amet. Cras sit amet porttitor lectus.</h2>
          </div>
        </div>

        <div className="dlyrecomed">
          <div className="Text-DlyRec">
            <h1>Daily Recommendation</h1>
            <h2>Curabit fermentum, lerem et finibus bibendum, dolor nulla consequat neque, in fermentum erat orci eu tortor. maecenas sed quam mi. Donec sed sollicitudin lacus, at tristique nuc. Fusce tristique turpis magna, in bibendum quam egestas sit amet. Cras sit amet porttitor lectus.</h2>
          </div>
          <div className="Daily-Circle">
          </div>
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
            <div className="BioGraphic">
              <div className="Icon-Yay">
                <div className="IDk">
              <h1>Loren ipsum</h1>
              <h2>Loren ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui purus, posuere id</h2>
              </div>

              </div>

            </div>


          </div>








        </div>
      </div>
      </>
    )
  }
  

  
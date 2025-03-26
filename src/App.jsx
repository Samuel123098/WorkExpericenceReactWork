import "./CSS/App.css"

import { BrowserRouter,Routes ,Route } from "react-router-dom"
import MainMenu from './Pages/MainMenu/main.jsx'
import FoodMenu from './Pages/FoodMenu/main.jsx'
import OrderingMenu from './Pages/OrderingMenu/main.jsx'
import Favorites from "./Pages/Favorites/main.jsx"



export default function App(){
    const firstime = localStorage.getItem("FirstTime")

    if (firstime == null){
        localStorage.setItem("FirstTime", false)
        const FirstTimeList = ["N/A","N/A","N/A","N/A","N/A"]
        FirstTimeList.forEach((num, index) => {
            localStorage.setItem(`CardID${index}`, num);
        });
    }
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainMenu />} />
                    <Route path="/MainMenu" element={<MainMenu />} />
                    <Route path="/FoodMenu" element={<FoodMenu />} />
                    <Route path="/OrderingMenu" element={<OrderingMenu />} />
                    <Route path="/Favorites" element={<Favorites />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


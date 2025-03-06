import "./CSS/App.css"

import { BrowserRouter,Routes ,Route } from "react-router-dom"
import MainMenu from './Pages/MainMenu/main.jsx'
import FoodMenu from './Pages/FoodMenu/main.jsx'
import OrderingMenu from './Pages/OrderingMenu/main.jsx'



export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainMenu />} />
                    <Route path="/MainMenu" element={<MainMenu />} />
                    <Route path="/FoodMenu" element={<FoodMenu />} />
                    <Route path="/OrderingMenu" element={<OrderingMenu />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


import './TitleCard.css'
export default function Tile(){
    return(
        <>
        <div className="Tile">

            <div className="Square">
            <div className="Circle"></div>
                <div className="Text">
                    <h1>title1</h1>
                    <h2>Title Description</h2>
                    <h3>Title Price</h3>
                </div>
                <button className="HeartButton" onClick={() => console.log("Whoops")}></button>
                <button className="Basketbutton"></button>
            </div>
        </div>
       
        </>
    )
}
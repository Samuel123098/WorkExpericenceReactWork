import "../CSS/TitleCard.css"

export default function TitleCard() {
    return (
      <>
        <div className="TitleCard">
            <div className="Circle" />
            <div className="BackgroundSquare">
                <h1 className="Title">ITEM</h1>
                <h2 className="ItemDescription">ITEM DESCRIPTION</h2>
                <h3 className="ItemPrice">ITEM PRICE</h3>

                <button className="HeartButton"> </button>
                <button className="ShoppingButton"> </button>
            </div>
          </div>
      </>
    )
  }
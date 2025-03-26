import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Scroller.css"
import Tile from './TitleCard.jsx'

const WheelControls = (slider) => {
  let touchTimeout
  let position
  let wheelActive

  function dispatch(e, name) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    )
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, "ksDragStart")
  }

  function wheel(e) {
    dispatch(e, "ksDrag")
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd")
  }

  function eventWheel(e) {
    e.preventDefault()
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    })
  })
}

export default function KeenScroller() {


  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
       perView: 3,
       spacing: 25 ,
      },
      vertical: false,

    },
    [WheelControls]
  )

  let Used_Cards = [0];

  function getRandomCard() {
    while (true) {
      let num = Math.floor(Math.random() * 21); 
      if (!Used_Cards.includes(num)) {
        Used_Cards.push(num);  
        return "Card" + num;  
      }
    }
  }

  return (
    <div className="BackgroundSquare">
        <div className="ScrollSquare">
            <div ref={sliderRef} className="keen-slider" >
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()} /></div>
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()}/></div>
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()}/></div>
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()}/></div>
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()}/></div>
                <div className="keen-slider__slide "><Tile TiCardNum={getRandomCard()}/></div>
            </div>
        </div>
    </div>

  )
}

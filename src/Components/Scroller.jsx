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

  return (
    <div className="BackgroundSquare">
        <div className="ScrollSquare">
            <div ref={sliderRef} className="keen-slider" >
                <div className="keen-slider__slide "><Tile /> </div>
                <div className="keen-slider__slide "><Tile /></div>
                <div className="keen-slider__slide "><Tile /></div>
                <div className="keen-slider__slide "><Tile /></div>
                <div className="keen-slider__slide "><Tile /></div>
                <div className="keen-slider__slide "><Tile /></div>
            </div>
        </div>

    </div>

  )
}

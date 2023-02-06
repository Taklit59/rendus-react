import { useState } from "react";
import './Slider.css';
import BtnSlider from "./BtnSlider";
import dataSlider from "./DataSlider";

export default function Slider() {

    let [slide, setSlide] = useState({index: 1})

    const nextSlide = () => {
        if (slide.index !== dataSlider.length ) {
            setSlide({ index: slide.index +1 })
        } 
        else if (slide.index === dataSlider.length) {
            setSlide({ index: 1 })
        }
    }

    const prevSlide = () => {
        if (slide.index === 1) {
            setSlide({ index: dataSlider.length })
        }
        else if ( slide.index !== 1 ) {
            setSlide({ index: slide.index - 1 })
        }
    }

    const moveDot = index => {
        setSlide({index:  index})
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div 
                        key={obj.id}
                        className={slide.index === index + 1 ? "slide active-anim" : "slide"}>
                            <img src={process.env.PUBLIC_URL + `/images/image${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => {
                    return <div 
                    className={slide.index === index + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(index + 1)}
                    ></div>
                })}
            </div>
        </div>
    )
}
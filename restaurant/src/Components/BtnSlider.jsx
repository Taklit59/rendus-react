import leftArrow from '../Icons/left-arrow.svg'
import rightArrow from '../Icons/right-arrow.svg'

export default function BtnSlider({moveSlide, direction}) {

    return (
        <button 
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
                <img src={direction === "next" ? rightArrow : leftArrow } alt="icone flèche" />
        </button>
    )
}
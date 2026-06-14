import type { ReactNode } from "react";
import './Carousel.css'

type CarouselProps = {
    children: ReactNode
}

export function Carousel({ children }:CarouselProps) {
    return (
        <div className="carousel">
            {children}
        </div>
    )
}

export default Carousel
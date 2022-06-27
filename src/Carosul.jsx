import { useState } from "react";

const Carosul = (props) => {
    const [active, setActive] = useState("0");

    const { images } = props;
    const handleClick = (e) => {
        setActive(e.target.dataset.index)
    }
    return (
        <div className="carousel">
            <img src={images[active]} alt="a cat  image" />
            <div className="carousel-smaller">
                {
                    images.map((photo, index) => (
                        <img
                            onClick={handleClick}
                            src={photo}
                            key={index}
                            data-index={index}
                            className={active == index ? "active" : ""}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Carosul;
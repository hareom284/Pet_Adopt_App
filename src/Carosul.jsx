import { useState } from "react";

const Carosul = (props) => {
    const [active, setActive] = useState("0");

    const { images } = props;
    console.log(images, "Images error")
    const handleClick = (e) => {
        setActive(e.target.dataset.index)
    }
    return (
        <div className="carousel">
            <img src={images[active]?.large} alt="a cat  image" />
            <div className="carousel-smaller">
                {
                    images.map((photo, index) => (
                        <img
                            onClick={handleClick}
                            src={photo.small}
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
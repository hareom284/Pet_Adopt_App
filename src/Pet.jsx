import { Link } from "react-router-dom";
const Pet = (props) => {
    const { name, animal, breed, images, city, state, id } = props;
    // console.log(images[0].small, 'FUKCING')
    let hero = "./default_image.jpg";
    if (images.length) {
        hero = images[0]?.small;
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} — ${breed} — ${city},${state}`}</h2>
            </div>
        </Link>
    );
};

export default Pet;
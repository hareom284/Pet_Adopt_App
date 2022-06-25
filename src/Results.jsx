import Pet from "./Pet"
const Pets = (props) => {
    if (props.pets.length) {
        return (
            props.pets.map((pet) => (
                <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    images={pet.images}
                    location={pet.city}
                    key={pet.id}
                    id={pet.id}
                />
            ))
        )
    }
    else {
        return (
            <h3>Not Found</h3>
        )
    }
}

export default Pets;
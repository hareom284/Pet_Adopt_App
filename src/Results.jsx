import Pet from "./Pet"
const Pets = (props) => {
    console.log(props.pets)
    if (props.pets.length) {
        return (
            props.pets.map((pet) => (
                <Pet
                    name={pet.name}
                    animal={pet.type}
                    images={pet.photos}
                    breed={pet.breeds.primary}
                    city={pet.contact.address.city}
                    state={pet.contact.address.state}
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
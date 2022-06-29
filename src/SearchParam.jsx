import { useEffect, useState, useContext } from "react";
import Pets from "./Results";
import useBreedlist from "./useBreedlist";
import ThemsContext from "./ThemsContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, updateLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const [pets, setPets] = useState([]);

    //custome hook 
    const [breeds] = useBreedlist(animal);

    const [theme, setTheme] = useContext(ThemsContext);

    useEffect(() => {
        requestPets();
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <>
            <div className="search-params">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}>
                    <label htmlFor="location">
                        Location
                        <input
                            id="location"
                            value={location}
                            placeholder="Location"
                            onChange={(e) => updateLocation(e.target.value)}
                        />
                    </label>
                    <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            value={animal}
                            onChange={(e) => {
                                updateAnimal(e.target.value);
                            }}
                            onBlur={(e) => {
                                updateAnimal(e.target.value);
                            }}
                        >
                            <option />
                            {ANIMALS.map((animal) => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="breed">
                        Breed
                        <select
                            disabled={!breeds.length}
                            id="breed"
                            value={breed}
                            onChange={(e) => updateBreed(e.target.value)}
                            onBlur={(e) => updateBreed(e.target.value)}
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="selectColor">
                        Colors
                        <select
                            id="selectColor"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            onBlur={(e) => setTheme(e.target.value)}
                        >
                            <option value="#ffa8B6">Pink Sand</option>
                            <option value="tomato">Tomato</option>
                            <option value="#00DDFF">Blue Light</option>
                        </select>
                    </label>
                    <button style={{ backgroundColor: theme }}>Submit</button>
                </form>

            </div>
            <Pets pets={pets} />
        </>
    );
};

export default SearchParams;
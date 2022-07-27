import { useEffect, useState, useContext } from "react";
import Pets from "./Results";
import useBreedlist from "./useBreedlist";
import client from "../api";
import ThemsContext from "./ThemsContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const [pets, setPets] = useState([]);
    //@return random between 10 to 100
    const random = Math.floor(Math.random() * 40) + 14;

    console.log(random)

    //custome hook 
    const [breeds] = useBreedlist(animal);

    const [theme, setTheme] = useContext(ThemsContext);

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {

        client.animal.search(
            {
                type: animal,
                limit: random


            })
            .then((resp) => {
                setPets(resp.data.animals)
            })
    }

    return (
        <>
            <div className="search-params">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}>
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
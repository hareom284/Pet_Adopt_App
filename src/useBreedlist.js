import { useState, useEffect } from "react";
import client from "../api";
const localCache = {};
export default function useBreedlist(animal) {
    const [breedlist, setBreedlist] = useState([]);
    const [status, setStatus] = useState("unload");
    useEffect(() => {
        if (!animal) {
            setBreedlist([]);
        }
        else if (localCache[animal]) {
            setBreedlist(localCache[animal]);
        }
        else {
            getBreedList()
        }

        function getBreedList() {
            setBreedlist([]);
            setStatus("loaded");
            client.animal.search({
                type: animal,
            })

                .then(res => {
                    // @return animals data from api
                    const Data = res.data.animals;

                    // get all breedList in an array
                    const list = Data.map((index) => {
                        return index.breeds.primary;
                    })

                    // remove duplicate data from array

                    const arr = [...new Set(list)];

                    localCache[animal] = arr || []
                    setBreedlist(localCache[animal]);
                    setStatus("loaded");
                })


        }
    }, [animal]);
    // console.log(breedlist)
    return [breedlist, status]

}
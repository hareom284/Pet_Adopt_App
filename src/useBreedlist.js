import { useState, useEffect } from "react";
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

        async function getBreedList() {
            setBreedlist([]);
            setStatus("loaded");

            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

            const resjson = await res.json();
            localCache[animal] = resjson.breeds || [];
            // console.log(localCache[animal], "local")
            setBreedlist(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);
    // console.log(breedlist)
    return [breedlist, status]

}
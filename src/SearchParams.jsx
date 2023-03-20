import { useEffect, useState } from "react";
//import Pet from "./Pet";
import BreedList from "./BreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = BreedList(animal);

  useEffect(()=>{
    requestPets();
  
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  
  async function requestPets(){
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      const json = await res.json();
    
      setPets(json.pets);
    }

  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault();
        requestPets();
      }}>
        <level htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </level>
        <level htmlFor="animal">
            Animal
            <select id="animal" value={animal} onChange={(e) => {setAnimal(e.target.value)}}>
                {ANIMALS.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
            </select>
        </level>
        <level htmlFor="breed">
            Breed
            <select id="breed" disabled={breeds.length===0} value={breed} onChange={(e) => {setBreed(e.target.value)}}>
                {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
            </select>
        </level>
        <button type="submit">Submit</button>
      </form>
      {/* {
        pets.map((pet) => (
            <Pet key={pet.id} name={pet.name} location={pet.location} breed={pet.breed} />
          )
        )
      } */}
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;


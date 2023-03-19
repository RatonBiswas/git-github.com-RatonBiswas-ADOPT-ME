import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [bread, setBread] = useState("");
  const breads = [];
  return (
    <div className="search-params">
      <form action="">
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
        <level htmlFor="bread">
            Bread
            <select id="bread" disabled={breads.length===0} value={bread} onChange={(e) => {setBread(e.target.value)}}>
                {breads.map((bread) => (
                  <option key={bread} value={bread}>
                    {bread}
                  </option>
                ))}
            </select>
        </level>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
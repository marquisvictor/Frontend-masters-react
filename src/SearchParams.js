import React from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = React.useState("Seattle, WA");
  const [breeds, setBreeds] = React.useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          {location}
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />
      </form>
    </div>
  );
};

export default SearchParams;

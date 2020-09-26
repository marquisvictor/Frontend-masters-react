import React from "react";
import { render, cleanup } from "@testing-library/react";
import pet, { _breeds, _dogs, ANIMALS } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
    const { getByTestId } = render(<SearchParams />);

    const animalDropdown = getByTestId("use-dropdown-animal");
    expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

    expect(pet.breeds).toHaveBeenCalled();
    const breedDropdown = getByTestId("use-dropdown-breed");
    expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

    const { container, getByText } = render(<SearchParams />);
    const searchResults = getByTestId("search-results");
    expect(searchResults.textContent).toEqual("No Pets Found");
    fireEvent(getByText("Submit"), new MouseEvent("click"));
    expect(pet.animals).toHaveBeenCalled();
    expect(searchResults.children.length).toEqual(_dogs.length);
    expect(container.firstChild).toMatchInlineSnapshot();

});
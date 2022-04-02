import { render, screen } from "@testing-library/react";
import SearchBox from "../search-box/search-box";

describe("SearcBox", () => {
    test("le filtre Rechercher un titre fonctionne", () => {
        render(<SearchBox message="Rechercher un titre" />)
        // expect(screen.getByRole('search-box').value).toBe("");
        expect(screen.getByPlaceholderText('Rechercher un titre').value).toBe("");
        
    })
    test("le filtre Rechercher un auteur fonctionne", () => {
        render(<SearchBox message="Rechercher un auteur" />)
        // expect(screen.getByRole('search-box').value).toBe("");
        expect(screen.getByPlaceholderText('Rechercher un auteur').value).toBe("");
        
    })
})

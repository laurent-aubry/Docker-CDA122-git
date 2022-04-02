import { render, screen } from "@testing-library/react";
import Musiques from "../pages/musiques";

//Faire ce 1er test avant d'importer MSW
// Test d'intégration
// Fonction Asynchrone
describe("Page Musiques",  () => {
    test("Renvoie 4 Musiques Card items", async () => {
        render(<Musiques />)
        const musiques = await screen.findAllByRole("card-item"); // findAllByRole en mode ASYNC
        expect(musiques.length).toBe(4);
    });
})
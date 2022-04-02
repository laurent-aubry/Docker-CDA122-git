import { render, screen, within } from "@testing-library/react";
import Musiques from "../pages/musiques";

import { rest } from "msw";
import { setupServer } from "msw/node";
import musiquesMock from "../../mocks/musiques.json";
import userEvent from "@testing-library/user-event";

//Setup du fake serveur
const server = setupServer(
  rest.get(`${process.env.REACT_APP_BACKEND}/musiques`, (req, res, ctx) => {
    return res(ctx.json(musiquesMock), ctx.status(200));
  })
);

//on doit écouter notre serveur avant chaque test
beforeEach(() => render(<Musiques />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

//Faire ce 1er test avant d'importer MSW
// Test d'intégration
// Fonction Asynchrone
describe("Page Musiques", () => {
  test("Renvoie 4 Musiques Card items", async () => {
    const musiques = await screen.findAllByRole("card-item"); // findAllByRole en mode ASYNC
    expect(musiques.length).toBe(4);
  });

  test("Filtre la liste de musiques",  async () => {
    const cards = await screen.findAllByRole("card-item");
    userEvent.type(screen.getByPlaceholderText("Rechercher un titre"), "a");

    expect(screen.getAllByRole("card-item").length).toBe(2);
    
    expect(screen.getByText("Titanium")).toBeInTheDocument();
    expect(screen.getByText("Natural")).toBeInTheDocument();
    expect(screen.queryByText("Smells like teen spirits")).not.toBeInTheDocument(); //getByText renvoie une erreur car attend 1 élément ou Throw Error
    // expect(screen.getAllByRole("card-item")).toHaveValue([cards[1], cards[3]])
  });

  
  // test("Clic bouton EDIT on Card", async () => {
  //   const cards = await screen.findAllByRole("card-item");
  //   userEvent.click(within(cards[0]).getByRole("card-edit"));

  //   // expect(screen.getByText("Titanium")).toBeInTheDocument();
  //   // expect(screen.getByText("Get lucky")).not.toBeInTheDocument();
  // })
});

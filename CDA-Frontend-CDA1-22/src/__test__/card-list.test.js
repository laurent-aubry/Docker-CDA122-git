import { render, screen } from "@testing-library/react";
import CardList from "../card-list/card-list";
import data from "../../mocks/musiques.json";

describe("CardList", () => {
  test("renvoie 4 cards items", () => {
    render(<CardList oeuvres={data.musiques} />);
    expect(screen.getAllByRole("card-item").length).toBe(4);
  });
});

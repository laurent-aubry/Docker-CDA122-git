import { render, screen } from "@testing-library/react";
import Card from "../card/card";

const cardProps = {
  route: "musiques",
  onDelete: (() => {}),
  oeuvre: {
    id: "1234",
    titre: "Imagine",
    auteur: "John Lennon",
    annee: "1970",
    imageUrl: "https://i1.sndcdn.com/artworks-000017289777-n5qjf4-t500x500.jpg",
  },
};

describe("Card", () => {
  test("renvoie le titre de l'oeuvre", () => {
    render(
      <Card
        {...cardProps} // On destructure l'object complet. Il sera possible d'écraser une props en la redéclarant (ex: titre: "conemara" )
      />
    );
    expect(
      screen.getByRole("heading", {
        name: /imagine/i,
      })
    ).toBeInTheDocument();
  });

  test("renvoie l'auteur de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/john lennon/i)).toBeInTheDocument();
  });

  test("renvoie l'annee de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/1970/i)).toBeInTheDocument();
  });

  test("renvoie l'image URL de l'oeuvre", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByAltText(/oeuvre/i).src).toBe(cardProps.oeuvre.imageUrl);
  });
});

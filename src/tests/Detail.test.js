import Detail from '../components/Detail';
import { render, screen } from "@testing-library/react";


describe('Pruebas del componente Detail', ()=> {
    test('Comprobar si todas las imágenes tienen un atributo alt', ()=> {

        const characterData = {
            name: "Harry Potter",
            img: "https://via.placeholder.com/150",
            alive: true,
            species: "Human",
            gender: "Male",
            house: "Gryffindor",
            alternativeNames: ["El Elegido"],
          };


        render(<Detail characterData={characterData}/>);
        const images = screen.getAllByRole("img");

        images.forEach((img) => {
            expect(img).toHaveAttribute("alt");
            expect(img.getAttribute("alt")).not.toBe("");
        })
    })
});
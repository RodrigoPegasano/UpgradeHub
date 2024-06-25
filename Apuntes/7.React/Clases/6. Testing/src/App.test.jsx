import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Comprueba que la página del contador funciona", async () => {

    it("La página se renderiza correctamente", async () => {

        render(<App></App>)

        // Tiene que aparecer un H1 que diga CONTADOR
        const h1 = await screen.findByText("CONTADOR")

        expect(h1).toBeInTheDocument()

    })

    it("Tiene que tener un botón para sumar", async () => {

        render(<App></App>)

        const boton = await screen.findByText("+")

        expect(boton).toBeInTheDocument()
    })

    it("Tiene que tener un botón para restar", async () => {

        render(<App></App>)

        const boton = await screen.findByText("-")

        expect(boton).toBeInTheDocument()
    })

    it("Tiene que tener un texto que marque el estado del contador y esté en 0", async () => {

        render(<App></App>)

        const contador = await screen.getByTestId("contador")

        expect(contador).toBeInTheDocument()

        expect(contador.textContent).toBe("0")
    })

    it("El botón de sumar debería aumentar el contador en 1 unidad", async () => {

        render(<App></App>)

        const boton = await screen.findByText("+")

        // Click en el botón
        fireEvent.click(boton)

        // Obtener el contador
        const contador = await screen.getByTestId("contador")

        // Comprobar que el contador tiene "1"
        expect(contador.textContent).toBe("1")
    })

    it("El botón de sumar debería aumentar el contador en 2 unidades a los dos clics", async () => {

        render(<App></App>)

        const boton = await screen.findByText("+")

        // Click en el botón
        fireEvent.click(boton)
        fireEvent.click(boton)

        // Obtener el contador
        const contador = await screen.getByTestId("contador")

        // Comprobar que el contador tiene "1"
        expect(contador.textContent).toBe("2")
    })

    it("El botón de sumar debería disminuir el contador en 1 unidad", async () => {

        render(<App></App>)

        const boton = await screen.findByText("-")

        // Click en el botón
        fireEvent.click(boton)

        // Obtener el contador
        const contador = await screen.getByTestId("contador")

        // Comprobar que el contador tiene "1"
        expect(contador.textContent).toBe("-1")
    })

    it("El botón de sumar debería disminuir el contador en 2 unidades a los dos clics", async () => {

        render(<App></App>)

        const boton = await screen.findByText("-")

        // Click en el botón
        fireEvent.click(boton)
        fireEvent.click(boton)

        // Obtener el contador
        const contador = await screen.getByTestId("contador")

        // Comprobar que el contador tiene "1"
        expect(contador.textContent).toBe("-2")
    })

    it("Al hacer clic en sumar y luego en restar, el valor debería volver a 0", async () => {

        render(<App></App>)

        const botonSumar = await screen.findByText("+")
        const botonRestar = await screen.findByText("-")

        // Click en el botón
        fireEvent.click(botonSumar)

        fireEvent.click(botonRestar)

        // Obtener el contador
        const contador = await screen.getByTestId("contador")

        // Comprobar que el contador tiene "1"
        expect(contador.textContent).toBe("0")
    })
})
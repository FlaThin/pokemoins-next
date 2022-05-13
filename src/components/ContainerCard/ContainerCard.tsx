import React from "react"
import { ContainerCardWrapper } from "../../styles/styles"
import { Card } from "../Card/Card"

export type PokemonProps = {
    pokedex: number
    name: string
    sprite: string
    type: string
    weight: number
    abilities: string
}

export interface ContainerCardProps {
    pokemons: PokemonProps[]
}

const ContainerCard = ( { pokemons }: ContainerCardProps) => {
    return (
        <ContainerCardWrapper>
            {pokemons.map(pokemon =>(

                <>
                    <Card pokemon={pokemon} key={pokemon.pokedex} />
                </>

            ))}

        </ContainerCardWrapper>
    )
}

export default ContainerCard


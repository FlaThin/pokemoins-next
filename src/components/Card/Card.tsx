import React from "react";
import { Wrapper } from "../../styles/styles";

import { PokemonProps } from "../ContainerCard/ContainerCard";

interface CardProps {
    pokemon: PokemonProps
}

export function Card ( { pokemon } : CardProps ) {

    return(
        <Wrapper>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprite} />
        </Wrapper>
    )

}


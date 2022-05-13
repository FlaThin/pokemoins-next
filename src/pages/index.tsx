
import React from 'react'

import Head from 'next/head'

import ContainerCard, { ContainerCardProps } from '../components/ContainerCard/ContainerCard';

import { GetServerSideProps } from "next";

import fs from "fs"

export default function Home({ pokemons }: ContainerCardProps) {

    return (
        <div>

            <Head>
                <title>Home</title>
            </Head>

            <ContainerCard pokemons={pokemons}/>

        </div>

    )
}

export const getStaticProps: GetServerSideProps = async () => {

    // const response = await api.get('');

    const pokemons = await fs.readFileSync('./pokemons.json', 'utf-8');

    return {
        props: {
            pokemons: JSON.parse(pokemons)
        }
    }

}


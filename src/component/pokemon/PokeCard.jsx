import Image from 'next/image';
import React from 'react'

const getPokeInfo = async (url) => {
    const res = await fetch(url);
    return res.json();
}

const PokeCard = async ({data}) => {

    const pokemon = await getPokeInfo(data);

  return (
    <div>
        <Image 
            src={pokemon.sprites.front_default} 
            width={100}
            height={100}
            alt={`photo ${pokemon.name}`} 
        />
        {pokemon.name}
    </div>
  )
}

export default PokeCard
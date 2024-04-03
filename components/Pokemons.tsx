import React from 'react'
import PokeCard from './PokeCard'

const Pokemons = () => {
      const pokemonData = [
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
    {name:'ditto', desc: 'cutie', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'},
  ]

  return (
    <div className='flex flex-wrap justify-center'>
        {pokemonData.map((pokemon,index) => (
            <div className="mt-4 mx-5" key={index}>
                <PokeCard name={pokemon.name} desc={pokemon.desc} imgUrl={pokemon.imgUrl} />
            </div>
        ))}
      
    </div>
  )
}

export default Pokemons

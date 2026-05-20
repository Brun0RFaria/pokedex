import PokemonCard from './PokemonCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemons'

function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
  p.name.toLowerCase().includes(filtro.toLowerCase())
  )


   return (
     <section>
     <label htmlFor="busca">Buscar por nome: </label>
     <input
       id="busca"
       type="search"
       value={filtro}
       onChange={(e) => setFiltro(e.target.value)}
       placeholder="Ex.: char"/>

      
      {listaFiltrada.length === 0 ?(
        <label>Nenhum pokemon encontrado</label>
       ):(
        <label>Mostrando {listaFiltrada.length} pokemons:</label>
      )}

     {listaFiltrada.map((pokemon) => (
       <PokemonCard 
         key={pokemon.id}
         id={pokemon.id}
         name={pokemon.name}
         type={pokemon.type}
         imageUrl={pokemon.imageUrl} />
       ))}
   </section>
 )
}

export default PokemonList

function PokemonCard({ id, name, type, imageUrl }) {
  return (
    <article className="pokemon-card">
      <div className="pokemon-card__media">
        <img src={imageUrl} alt={name} width={96} height={96} />
      </div>
      <div className="pokemon-card__body">
        <h2>
          #{String(id).padStart(3, '0')} — {name}
        </h2>
        <p className="pokemon-card__type">
          Tipo: <span>{type}</span>
        </p>
      </div>
    </article>
  )
}

export default PokemonCard
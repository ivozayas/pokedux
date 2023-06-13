import './index.css'

function PokemonDescription({ types }){
    return (
        <div className='description'>
            <div className='types-container'>
                {types.map(type => (
                    <div  className='type'>
                        <h3 alt={type.type.name}>{type.type.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { PokemonDescription }
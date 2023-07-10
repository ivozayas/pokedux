import './index.css'

function PokemonDescription({ types, id }){
    return (
        <div className='description'>
            <div className='types-container'>
                {types.map(type => (
                    <div key={type.type.name} className='type'>
                        <h3>{type.type.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { PokemonDescription }
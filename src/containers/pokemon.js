import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../container/pokemonactions'
import _ from 'lodash'

export default function Pokemon(props) {
    const pokemonName = props.match.params.pokemon
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.pokemon)
    useEffect(() => {
        dispatch(getPokemon(pokemonName))
        console.log(pokemonState)
    }, [])
    const showData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]
            return (
                <div className='pokemon-wrapper'>
                    <div className='item'>
                        <h1>Sprites</h1>
                        <img src={pokeData.sprites.front_default} alt={pokemonName} />
                        <img src={pokeData.sprites.back_default} alt={pokemonName} />
                        <img src={pokeData.sprites.front_shiny} alt={pokemonName} />
                        <img src={pokeData.sprites.back_shiny} alt={pokemonName} />
                    </div>
                    <div className='item'>
                        <h1>Stats</h1>
                        <p>{pokeData.stats.map(el => {
                            return <p>{el.stat.name}: {el.base_stat}</p>
                        })}</p>
                        <div className='item'>
                            <h1>Type</h1>
                            <p>{pokeData.types.map(ty => {
                                return (
                                    <>
                                        <p>{ }</p>
                                        <p>{ty.type.name}</p>
                                    </>
                                )
                            })}</p>
                        </div>
                        <div className='item'>
                            <h1>Habilidades</h1>
                            {pokeData.abilities.map(st => {
                               return <p>{st.ability.name}</p>
                            })}
                        </div>
                    </div>
                </div>
            )
        } if (pokemonState.loading) {
            return <p>Loading...</p>
        } if (pokemonState.errorMsg !== '') {
            return <p>{pokemonState.errorMsg}</p>
        }
        return <p>error ao pegar o pokemon</p>
    }
    return (
        <div className={'poke'}>
            <h1>{pokemonName}</h1>
            {showData()}
        </div>
    )
}
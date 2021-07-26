import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getPokemonList } from '../container/pokemonactions';
import { Link } from 'react-router-dom';
import './style.css';
import ReactPaginate from 'react-paginate';

export default function PokemonList( props ) {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.PokemonList)
    useEffect(() => {
        fetchData(1)
    },[])
    const fetchData = (page = 1) => {
        dispatch(getPokemonList(page))
    }
    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className='list-wrapper'>
                    {pokemonList.data.map((el) => {
                        return (
                            <div className={'pokemon-item'}>
                                <p>{el.name}</p>
                                <Link to={`/pokemon/${el.name}`} >View</Link>
                            </div>
                        )
                    })}
                </div>
            )
        }
        if (pokemonList.loading) {
            return <p>Loading...</p>
        }
        if (pokemonList.errorMsg !== '') {
            return <p>{pokemonList.errorMsg}</p>
        }
    }
    return (
        <div>
            <div className='search-wrapper'>
                <p>Pesquisar nome:</p>
                <input type='text' onChange={(e) => setSearch(e.target.value)} className='search_bar' />
                <button onClick={() => props.history.push(`/pokemon/${search}`)} className='search_btn' >Pesquisar</button>
            </div>
            {showData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data)=>fetchData(data.selected + 1)}
                    containerClassName={'pagination'}
                />
            )}
        </div>
    )
}
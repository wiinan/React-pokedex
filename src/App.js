import './App.css';
import React from 'react';
import PokemonList from './containers/pokemonList';
import Pokemon from './containers/pokemon';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/pokemon/test'}>Pesquisar</NavLink>
      </nav>
      <Switch >
        <Route path={'/'} exact component={PokemonList} />
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;

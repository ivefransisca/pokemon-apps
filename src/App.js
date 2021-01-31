
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import PokemonList from './container/PokemonList';
import PokemonDetail from './container/PokemonDetail';
import MyPokemon from './container/MyPokemon';
import BottomNavBar from './component/BottomNavBar';
import Wrapper from './component/Wrapper';

const App = ()=> {
	
	return (
		<MyProvider>
			<Router>
				<Wrapper>
					<Switch>
						<Route exact path="/">
							<PokemonList data-testid="pokemon-list" />
						</Route>
						<Route path="/my-pokemon">
							<MyPokemon data-testid="my-pokemon" />
						</Route>
						<Route path="/:pokemonName">
							<PokemonDetail data-testid="pokemon-detail" />
						</Route>
					</Switch>
				</Wrapper>
				<BottomNavBar/>
			</Router>
		</MyProvider>
	);
}

export default App;

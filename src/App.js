
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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
						<Route exact path="/pokemon-apps/">
							<PokemonList data-testid="pokemon-list" />
						</Route>
						<Route exact path="/pokemon-apps/my-pokemon">
							<MyPokemon data-testid="my-pokemon" />
						</Route>
						<Route exact path="/pokemon-apps/pokemondetail/:pokemonName">
							<PokemonDetail data-testid="pokemon-detail" />
						</Route>
						<Route>
							<Redirect to="/pokemon-apps/" />
						</Route>
					</Switch>
				</Wrapper>
				<BottomNavBar/>
			</Router>
		</MyProvider>
	);
}

export default App;

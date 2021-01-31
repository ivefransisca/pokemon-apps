import { Router } from 'react-router-dom';
import BottomNavBar from '../component/BottomNavBar';
import { createMemoryHistory } from 'history';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';

const client = new ApolloClient({
	uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
	cache: new InMemoryCache()
});

it("renders without crashing", ()=>{
	const history = createMemoryHistory()
	const div= document.createElement("div");
	render(
		<ApolloProvider client={client}>
			<Router history={history}>
				<BottomNavBar></BottomNavBar>
			</Router>
		</ApolloProvider>
	, div)

})

// it('full app rendering/navigating', () => {
// 	const { queryByTestId } =  render(
// 		<ApolloProvider client={client}>
// 			<MyProvider>
// 				<App />
// 			</MyProvider>
// 		</ApolloProvider>);
// 	expect(queryByTestId('pokemon-list')).toReturn()
  
// 	// const leftClick = { button: 0 }
// 	// userEvent.click(screen.getByText(/pokemon list/i), leftClick)
  
// 	// // check that the content changed to the new page
// 	// expect(screen.getByText(/my pokemone/i)).toBeInTheDocument()
// })

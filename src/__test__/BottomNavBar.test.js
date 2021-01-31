import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import BottomNavBar from '../component/BottomNavBar';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';


describe('<BottomNavbar />', () => {
	
	it("renders without crashing", ()=>{
		const history = createMemoryHistory()
		const div= document.createElement("div");
		ReactDOM.render(
			<Router history={history}>
				<BottomNavBar></BottomNavBar>
			</Router>
		, div)
	})
	it("renders link pokemon", ()=>{
		const history = createMemoryHistory()
		const {queryByTestId } = render(
			<Router history={history}>
				<BottomNavBar></BottomNavBar>
			</Router>
		)
		expect(queryByTestId("pokemon-list-link")).toBeTruthy()
		expect(queryByTestId("my-pokemon-link")).toBeTruthy()
	});
});


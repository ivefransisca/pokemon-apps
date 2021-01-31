import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import PokemonListData from '../component/PokemonListData';

const mocks = []; // We'll fill this in next

it('renders without error', () => {
	const component = TestRenderer.create(
		<MockedProvider mocks={mocks} addTypename={false}>
			<PokemonListData />
		</MockedProvider>,
);

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});
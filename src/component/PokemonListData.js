import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import PokemonCard from './PokemonCard';
import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import {useHistory} from 'react-router-dom';

const PokemonListData = () =>{

	const history = useHistory();
	const context = useContext(MyContext);

	const goToDetail = (data) =>{
		context.setActivePokemon(data)
		history.push(`pokemondetail/${data.name}`)
	}
	const List = styled('div')`
		-webkit-box-flex: 0;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
		& > a{
			text-decoration: none;
		}
	`;

	const Button = styled('button')`
		display: block;
		border: none;
		background: transparent;
		width: 100%;
		padding: 0px;
		&:focus{
			outline: none;
		}
	`;
	const GetAllPokemonQuery = gql`query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
		count
		next
		previous
		status
		message
		results {
			url
			name
			image
		}
		}
	}`;
	const { loading, error, data } = useQuery(GetAllPokemonQuery, {
		"limit": 2,
		"offset": 1
	});
	useEffect(() => {
		if(context.pokemonList.length <= 0){
			if (data) {
				let copyPokemonList = [...data.pokemons.results]
	
				const newPokemonListData= copyPokemonList.map(poke =>{
					return Object.assign({}, poke, {count: 0})
				})
				context.setPokemonList(newPokemonListData)
			}
		}
	}, [data, context])
	console.log(data)

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	
	return(
		<MyContext.Consumer>
			{context => (
				context.pokemonList.map(dataPokemon => (
					<List key={dataPokemon.name} >
						<Button onClick={() => goToDetail(dataPokemon)}>
							<PokemonCard data={dataPokemon}></PokemonCard>
						</Button>
					</List>
				))
			)}
		</MyContext.Consumer>
	)
}

export default PokemonListData;
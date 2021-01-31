import styled from '@emotion/styled';
import MyContext from '../context/MyContext';
import PageWrapper from '../component/PageWrapper';
import PokemonCard from '../component/PokemonCard';

const MyPokemon = () =>{

	const ListWrapper = styled('div')`
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	`;

	const List = styled('div')`
		-webkit-box-flex: 0;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
		& > a{
			text-decoration: none;
		}
	`;
	
	return(
		<MyContext.Consumer>
			{context => (
				<PageWrapper title="My Pokemon">
					<ListWrapper>
						{
							context.myPokemon.map((data,index) => (
								<List key={index}>
									<PokemonCard data={data}></PokemonCard>
								</List>
							))
						}
					</ListWrapper>
				</PageWrapper>
			)}
		</MyContext.Consumer>
	)
}

export default MyPokemon;
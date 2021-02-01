import styled from '@emotion/styled';
import MyContext from '../context/MyContext';
import PageWrapper from '../component/PageWrapper';
import PokemonCard from '../component/PokemonCard';
import { Link } from 'react-router-dom';

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

	const NoPokemon = styled('div')`
		text-align: center;
		width: 50%;
		min-width: 250px;
		display: block;
		margin: auto;
		margin-top: 50px;
		&>h3{
			color: grey;
			font-size: 16px;
			margin-top: 0px;
			margin-bottom: 0px;
		}
		&>a{
			background: linear-gradient(160deg , #20FDF0 1.24%, #94AAF9 93.78%);
			border: none;
			border-radius: 30px;
			padding: 6px 25px;
			margin: 5px;
			color: white;
			cursor: pointer;
			transition: 0.25s ease-in-out;
			display: block;
			margin: auto;
			text-decoration: none;
			margin-top: 30px;
			width: 110px;
			line-height: 1.2;
			&:hover{
				background: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);
			}
			&:focus{
				outline: none;
			}
		}
	`;
	
	return(
		<MyContext.Consumer>
			{context => (
				<PageWrapper title="My Pokemon">
					<ListWrapper>
						{
							context.myPokemon.length > 0 ?
							context.myPokemon.map((data,index) => (
								<List key={index}>
									<PokemonCard data={data}></PokemonCard>
								</List>
							))
							:
							<NoPokemon>
								<h3>You don't have any Pokemon yet! </h3>
								<h3>Catch Pokemon first!</h3>
								<Link to="/pokemon-apps/">Pokemon List</Link>
							</NoPokemon>
						}
					</ListWrapper>
				</PageWrapper>
			)}
		</MyContext.Consumer>
	)
}

export default MyPokemon;
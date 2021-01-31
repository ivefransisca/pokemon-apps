import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import MyContext from '../context/MyContext';
import Modal from '../component/Modal';
import PageWrapper from '../component/PageWrapper';
import PokemonSpec from '../component/PokemonSpec';
import RandomButton from '../component/RandomButton';
import styled from '@emotion/styled';
import Loading from '../component/Loading';

const PokemonDetail = () =>{
	let { pokemonName } = useParams();

	const [successCatch, setSuccessCatch] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const Container = styled('div')`
		margin: 0px 20px;
		text-align: center;
	`;

	const ImageWrapper = styled('div')`
		width: 180px;
		height: 180px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		&>img{
			transform: scale(2.0);
		}
	`;
	
	const queryVariable = {
		"name": pokemonName
	};

	const GetdetailPokemonQuery = gql`query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			abilities {
				ability {
					name
				}
			}
			moves {
				move {
					name
				}
			}
			types {
				type {
					name
				}
			}
			message
			status
		}
	}`;

	const { loading, error, data } = useQuery(GetdetailPokemonQuery, {
		variables : queryVariable
	});

	if (loading) return <Loading />;
	if (error) return <PageWrapper>Ups! Error :(</PageWrapper>;

	const GetSpecDetail = () =>{
		return(
			<div>
				<PokemonSpec title="Pokemon Types" data={data.pokemon.types} name="types" />
				<PokemonSpec title="Pokemon Moves" data={data.pokemon.moves} name="moves" />
			</div>
		)
	}

	const getRandomValue = (value) =>{
		setSuccessCatch(value)
		if(value){
			setIsModalOpen(true)
			
		}
	}
	
	const closeModal = () =>{
		setIsModalOpen(false)
	}

	return(
		<PageWrapper title={pokemonName}>
			<Container>
				<MyContext.Consumer>
					{context => (
						<>
							<ImageWrapper>
								<img src={context.activePokemon.image} alt={context.activePokemon.name}/>
							</ImageWrapper>
							{(successCatch && isModalOpen) && <Modal closeModal={closeModal} />}
						</>
					)}
				</MyContext.Consumer>
				<RandomButton getRandom={(value)=> getRandomValue(value)} />
				<GetSpecDetail></GetSpecDetail>
			</Container>
		</PageWrapper>
	)
}

export default PokemonDetail;
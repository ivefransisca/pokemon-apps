import styled from '@emotion/styled';
import PageWrapper from '../component/PageWrapper';
import PokemonListData from '../component/PokemonListData';

const PokemonList = () =>{

	const ListWrapper = styled('div')`
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	`;

  	return(
		<PageWrapper title="Pokemon List">
			<ListWrapper>
				<PokemonListData/>
			</ListWrapper>
		</PageWrapper>
	)
}

export default PokemonList;
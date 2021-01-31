import styled from '@emotion/styled';

const PokemonSpec = (props) =>{

	const Title = styled('h5')`
		font-size: 14px;
		margin-top: 30px;
		margin-bottom: 10px;
		color: #2f4f4f ;
		text-transform: capitalize;
	`;

	const Wrapper = styled('div')`
		margin-bottom: 15px;
		text-align: center;
		@media (min-width: 768px) {
			text-align: left;
			flex-basis: 180px;
			&.moves{
				flex-basis: calc(100% - 180px);
			}
		}
	`;

	const Specs = styled('ul')`
		margin-bottom: 0px;
		list-style: none;
		padding-left: 0px;
	`;

	const Spec = styled('li')`
		display: inline-block;
		margin-right: 5px;
		color: white;
		background: white;
		padding: 3px 10px;
		border-radius: 20px;
		font-size: 12px;
		line-height: 1.2;
		color: #3d7dca;
		text-transform: capitalize;
	`;

	return(
		<Wrapper className={props.name === 'moves' && 'moves'}>
			<Specs>
				<Title>
					{props.title}
				</Title>
				{
					props.name === 'types' ?
					props.data.map(data => (
						<Spec key={data.type.name} >
							{data.type.name}
						</Spec>
					))
					:
					props.data.map(data => (
						<Spec key={data.move.name} >
							{data.move.name}
						</Spec>
					))
				}
			</Specs>
		</Wrapper>
	)
}

export default PokemonSpec;
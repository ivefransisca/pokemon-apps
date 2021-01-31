import styled from '@emotion/styled';

const RandomButton = (props) =>{
	const Button = styled('button')`
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
		position: relative;
		&:hover{
			background: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);
		}
		&:focus{
			outline: none;
		}
	`;

	const succesWith50PercentChance = () =>{
		var randomValue = Math.random() < 0.5
		props.getRandom(randomValue)
	}

	return(
		<Button data-testid="random-button" onClick={succesWith50PercentChance}>Catch Me!</Button>
	)
}

export default RandomButton;
import styled from '@emotion/styled';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

const PokemonCard = (props) =>{
	
	const context = useContext(MyContext);
	const releasePokemon = (nickname,name) =>{
		context.releaseMyPokemon({nickname, name})
	}
	
	const Count = styled('div')`
		position: absolute;
		right: 5px;
		top: 5px;
		border-radius: 25px;
		width: 30px;
		height: 30px;
		text-align: center;
		border: 2px solid #f1f1f1;
		&:before{
			content: "";
			width: 30px;
			height: 15px;
			background-color: white;
			position: absolute;
			border-radius: 0 0 200px 200px;
			left: 0;
			bottom: 0;
		}
		&:after{
			content: "";
			width: 30px;
			height: 15px;
			background-color: #FF0000;
			position: absolute;
			border-radius: 0 0 200px 200px;
			left: 0;
			top: 0;
			transform: rotate(180deg);
		}
		&>span{
			font-size: 12px;
			background: #ddd;
			color: #3d7dca;
			position: absolute;
			z-index: 1;
			font-weight: bold;
			width: 20px;
			height: 20px;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			border-radius: 50%;
			line-height: 20px;
		}
	`;

	const Card = styled('div')`
		padding: 10px;
		text-align: center;
		border-radius: 15px;
		background: white;
		border: none;
		position: relative;
		margin: 0px 10px 15px;
		transition: 0.25s ease-in-out;
		&:hover{
			background: linear-gradient(180deg, #FFFFFF 57.29%, #BAFBFF 100%);
			cursor: pointer;
		}
		&.mypokemon-card{
			&:hover{
				cursor: auto;
				background: white;
			}
		}
	`;

	const CardName = styled('h4')`
		text-transform: capitalize;
		margin-top: 0px;
		margin-bottom: 0px;
		color: #3d7dca ;
	`;

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
		&:hover{
			background: linear-gradient(320deg , #20FDF0 1.24%, #94AAF9 93.78%);
		}
		&:focus{
			outline: none;
		}
	`;

	const CardText = styled('h5')`
		text-transform: capitalize;
		margin-top: 0px;
		margin-bottom: 0px;
		color: #b7b7b7;
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 5px;
	`;

	return(
		<Card className={props.data.nickname && 'mypokemon-card'}>
			<img src={props.data.image} alt={`${props.data.name} Icon`} />
			{
				props.data.nickname ?
				<>
					<CardName>{props.data.nickname}</CardName>
					<CardText>{props.data.name}</CardText> 
					<Button data-testid="release" onClick={() => releasePokemon(props.data.nickname, props.data.name)}>Release Me</Button>
				</>
				:
				<>
					<CardName>{props.data.name}</CardName> 
					<Count><span>{props.data.count}</span></Count>
				</>
			}
		</Card>
	)
}

export default PokemonCard;
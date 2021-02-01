import { useContext, useState } from "react";
import MyContext from '../context/MyContext';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

const Form = () =>{

	const [nicknameInput, setNicknameInput] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

    const onChange = (e) => {
        setNicknameInput(e.currentTarget.value);
	};
	const context = useContext(MyContext);
	const history = useHistory();
	
	const onSubmit = (e) =>{
		e.preventDefault();
		
		const copyMyPokemonList = [...context.myPokemon]
		const nicknameFilter = copyMyPokemonList.filter(result=> result.nickname === nicknameInput)
		if(nicknameFilter.length >= 1){
			setErrorMessage(true)
		}else{
			const dataActivePokemon = {...context.activePokemon}
			dataActivePokemon.nickname = nicknameInput
			context.addMyPokemon(dataActivePokemon)
			history.push('/my-pokemon');
		}
	}

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

	const Error = styled('span')`
		font-size: 11px;
		font-style: italic;
		color: red;
	`;
	
	return(
		<form onSubmit={onSubmit}>
			<label>
				Gotcha, give me a name!
			</label>
			<input type="text" onChange={onChange} data-testid="input-nickname" value={nicknameInput} style={{
				padding: "10px",
				border: '1px solid #3d7dca',
				color: '#3d7dca',
				margin: '10px 0px',
				width: '100%',
				borderRadius: '5px',
				boxSizing: 'border-box'
			}}/>
			{errorMessage && <Error>Nickname sudah terdaftar!</Error>}
			<Button type="submit">Submit</Button>
		</form>
	)
}

export default Form;
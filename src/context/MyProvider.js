import { useReducer } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) =>{

	const initialState = {
		pokemonList : [],
		myPokemonList: [],
		activePokemon: {},
	};

	const actions = {
		SET_POKEMONLIST: 'SET_POKEMONLIST',
		ADD_MYPOKEMON: 'ADD_MYPOKEMON',
		RELEASE_MYPOKEMON: 'RELEASE_MYPOKEMON',
		SET_ACTIVEPOKEMON: 'SET_ACTIVEPOKEMON',
		SET_ALLSTATEDATA: 'SET_ALLSTATEDATA'
	}

	function reducer(state, action) {
		switch (action.type) {
		case actions.SET_POKEMONLIST:
			return {
				...state,
				pokemonList: action.value
			}
		case actions.ADD_MYPOKEMON:
			let copyPokemonList = [...state.pokemonList]
			const checkData= copyPokemonList.map(poke =>{
				if(poke.name === action.value.name){
					return Object.assign({}, poke, {count: poke.count+1})
				}
				return poke;
			})
			return {
				...state,
				myPokemonList: state.myPokemonList.concat(action.value),
				activePokemon: [],
				pokemonList: checkData
			}
		case actions.RELEASE_MYPOKEMON:
			let copyPokemonListRelease = [...state.pokemonList]
			const dataReleaseNew= copyPokemonListRelease.map(poke =>{
				if(poke.name === action.value.name){
					return Object.assign({}, poke, {count: poke.count-1})
				}
				return poke;
			})
			const newArray = state.myPokemonList.filter(result=> result.nickname !== action.value.nickname)
			return {
				...state,
				myPokemonList: newArray,
				pokemonList: dataReleaseNew
			}
		case actions.SET_ACTIVEPOKEMON:
			return {
				...state,
				activePokemon: action.value
			}
		case actions.SET_ALLSTATEDATA:
			return action.value
		default:
			throw new Error();
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		allStateData: state,
		myPokemon: state.myPokemonList,
		activePokemon: state.activePokemon,
		pokemonList: state.pokemonList,
		setAllStateData: (value) => { dispatch ({type: actions.SET_ALLSTATEDATA, value: value})},
		setPokemonList: (value) => { dispatch ({type: actions.SET_POKEMONLIST, value: value})},
		addMyPokemon: (value) => { dispatch ({type: actions.ADD_MYPOKEMON, value: value})},
		releaseMyPokemon: (value) => { dispatch ({type: actions.RELEASE_MYPOKEMON, value: value})},
		setActivePokemon: (value) => { dispatch ({type: actions.SET_ACTIVEPOKEMON, value: value})},
	}

	return (
		<MyContext.Provider
			value={value}
		>
			{props.children}
		</MyContext.Provider>
	);
	
}
export default MyProvider;


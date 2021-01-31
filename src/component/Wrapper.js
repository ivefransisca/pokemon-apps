import { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import styled from '@emotion/styled';

const Wrapper = (props) =>{
	const context = useContext(MyContext);
	useEffect(() => {
		if(sessionStorage.getItem("allStateData")){
			
			const parsedData = JSON.parse(sessionStorage.getItem("allStateData"))
			if(parsedData.pokemonList){
				context.setAllStateData(parsedData)
			}
		}
	  }, [])
	
	useEffect(() => {
		sessionStorage.setItem("allStateData", JSON.stringify(context.allStateData))
	}, [context])

	const Wrapper = styled('div')`
		margin-bottom: 50px;
		min-height: 100vh;
		background: rgba(255, 255,255,0.9);
		@media (min-width: 768px) {
			max-width: 600px;
			margin: auto;
			margin-bottom: 50px;
		}
	`;

	return(
		<Wrapper>{props.children}</Wrapper>
	)
}

export default Wrapper;

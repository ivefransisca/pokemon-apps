import Lottie from "react-lottie";
import animationData from '../lottie/pokemon.json';
import styled from '@emotion/styled';

const Loading = () =>{

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	const Wrapper = styled('div')`
		width: 100%;
		min-height: calc(100vh - 150px);
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const LoadingText = styled('h5')`
		font-size: 16px;
		margin-top: 0px;
		color: #2f4f4f ;
		text-align: center;
	`;

	return(
		<Wrapper>
			<div>
				<Lottie 
					options={defaultOptions}
					height={100}
					width={100}
				/>
				<LoadingText>Loading...</LoadingText>
			</div>
		</Wrapper>
	)
}

export default Loading;
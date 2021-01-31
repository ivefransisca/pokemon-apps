import styled from '@emotion/styled';

const PageWrapper = (props) =>{

	const Wrapper = styled('div')`
		padding: 15px 10px;
	`;

	const Title = styled('h4')`
		font-size: 20px;
		margin-top: 0px;
		margin-bottom: 20px;
		color: #3d7dca ;
		text-align: center;
		text-transform: capitalize;
		&:after{
			content: "";
			width: 60px;
			margin: auto;
			background: linear-gradient(165.7deg , #20FDF0 4.24%, #94AAF9 86.78%);
			height: 3px;
			display: block;
			margin-top: 5px;
		}
	`;

	return(
		<Wrapper>
			<Title>
				<span data-testid="page-title">{props.title}</span>
			</Title>
			{props.children}
		</Wrapper>
	)
}

export default PageWrapper;
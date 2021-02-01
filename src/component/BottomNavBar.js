import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const BottomNavBar = () =>{

	const Wrapper = styled('div')`
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1030;
		background: white;
		box-shadow: 0px -2px 15px rgba(0,0,0,0.25);
		background: #3d7dca;
		color: white;
	`;

	const Row = styled('div')`
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		// margin-right: -15px;
		// margin-left: -15px;
	`;

	const Column = styled('div')`
		-webkit-box-flex: 0;
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
		text-align: center;
		padding: 15px 0px;
		& > a{
			text-decoration: none;
			color: white;
			font-weight: 500;
			display: block;
		}
		&:last-child{
			box-sizing: border-box;
			border-left: 1px solid white;
		}
	`;

	const NavName = styled('span')`
		margin-left: 10px;
	`;

	return(
		<Wrapper>
			<Row>
				<Column>
					<Link to="/" data-testid="pokemon-list-link">
						<FontAwesomeIcon className="mr-2" icon={faBook} />				
						<NavName>Pokemon List</NavName>
					</Link>
				</Column>
				<Column>
					<Link to="/my-pokemon" data-testid="my-pokemon-link">
						<FontAwesomeIcon className="mr-2" icon={faHandHoldingHeart} />	
						<NavName>My Pokemon</NavName>
					</Link>
				</Column>
			</Row>
		</Wrapper>
	)
}

export default BottomNavBar;
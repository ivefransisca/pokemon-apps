import styled from '@emotion/styled';
import { Fragment } from 'react';
import MyContext from '../context/MyContext';
import Form from './Form';

const Modal = (props) =>{

	const ModalBg = styled('div')`
		z-index: 999;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.3);
	`;

	const ModalBody = styled('div')`
		z-index: 1000;
		position: absolute;
		top: 35%;
		left: 50%;
		width: 280px;
		max-width: 100%;
		min-height: 100px;
		border-radius: 10px;
		transform: translate(-50%, -50%);
		background: #fff;
	`;

	const ModalContent = styled('div')`
		padding: 20px;
	`;

	const ModalImage = styled('div')`
		position: relative;
		& > img{
			position: absolute;
			top: -70px;
			left: 50%;
			transform: translateX(-50%) scale(1.5);
		}
	`;

	const Name = styled('h3')`
		text-align: center;
		text-transform: capitalize;
		color: #3d7dca;
		margin-top: 20px;
	`;

	return(

		<MyContext.Consumer>
			{context => (
				<Fragment>
					<ModalBody>
						<ModalImage>
							<img src={context.activePokemon.image} alt=""/>
						</ModalImage>
						<ModalContent>
							<Name>{context.activePokemon.name}</Name>
							<Form/>
						</ModalContent>
					</ModalBody>
					<ModalBg onClick={props.closeModal} />	
				</Fragment>
			)}
		</MyContext.Consumer>
	)
}

export default Modal;
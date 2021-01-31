import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from '../component/Form';

describe('<Form />', () => {
	it('renders Form component', () => {
		render(<Form />);
		screen.debug();
	});
	it("renders correctly", ()=>{
		const {queryByTestId, queryByText } = render(<Form/>)
		expect(queryByText('Gotcha, give me a name!')).toBeTruthy();
		expect(queryByTestId("input-nickname")).toBeTruthy()
	});
});

describe("Input value", ()=>{
	it("updates on change", ()=>{
		const {queryByTestId} = render(<Form/>);
		const nicknameInput = queryByTestId('input-nickname');
		fireEvent.change(nicknameInput, {target: {value: "test"}})
		expect(nicknameInput.value).toBe("test")
	})
})

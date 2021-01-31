import PageWrapper from '../component/PageWrapper';
import { shallow } from "enzyme";
import { cleanup, render } from '@testing-library/react';

describe("rendering components", ()=>{
	afterEach(cleanup);
	it("renders App Component without crashing", () =>{
		shallow(<PageWrapper/>);
	});
	it('props work', ()=>{
		const wrapper = render(<PageWrapper title="test" />);
		wrapper.getByText(/test/);	
	});
})
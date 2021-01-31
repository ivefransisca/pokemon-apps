import { render } from "@testing-library/react";
import RandomButton from "../component/RandomButton";

it("renders correctly", ()=>{
	const {queryByTestId} = render(<RandomButton/>)
	expect(queryByTestId("random-button")).toBeTruthy()
});

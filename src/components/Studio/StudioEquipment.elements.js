import styled from "styled-components";

export const StudioEqContainer = styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	background-color: black;
	gap: 1rem;
	min-height: 100vh;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export const StudioEqTitle = styled.h4`
	text-align: center;
	margin: 0rem;
`;
export const StudioEqText = styled.p`
	margin: 0 0 0 0rem;
`;

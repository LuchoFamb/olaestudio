import styled from "styled-components";

export const AboutFlexContainer = styled.div`
	display: flex;
	background-color: black;
	min-height: calc(100vh - 119px);
	@media screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const AboutContainer = styled.div`
	width: 100%;
	height: 100%;
	color: black;
	padding: 0rem 1rem;
	padding-top: 3.5rem;
	display: flex;
	justify-content: center;
	text-align: center;
	background-color: black;
	color: white;
`;
export const AboutWrapper = styled.div`
	max-width: 700px;
`;

export const MainText = styled.h2`
	font-size: 3rem;
	margin-bottom: 2rem;
	line-height: 3.2rem;
`;
export const SubMainText = styled.h4`
	font-size: 2rem;
	margin-bottom: 2rem;
`;
export const BodyText = styled.p`
	font-size: 1.5rem;
`;
export const AboutLogoHeader = styled.img`
	max-width: 700px;
`;

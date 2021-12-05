import React from "react";
import {
	AboutContainer,
	AboutFlexContainer,
	// AboutLogoHeader,
	AboutWrapper,
	BodyText,
	MainText,
	SubMainText,
} from "./About.elements";
// import logo from "../../assets/logos/LOGOmin.png";
const About = () => {
	return (
		<AboutFlexContainer>
			<AboutContainer>
				<AboutWrapper>
					{/* <AboutLogoHeader src={logo} alt="ola logo"></AboutLogoHeader> */}
					<MainText>Somos OLA</MainText>
					<SubMainText>
						Nuestra pasión radica en la creación de una huella sonora.
					</SubMainText>
					<BodyText>
						Diseño sonoro, composición musical, audio inmersivo para medios
						lineales y no lineales. Utilizamos técnicas de grabación de campo,
						foley, síntesis y sampling.
					</BodyText>

					<h5 style={{ textAlign: "center", margin: "2rem" }}>
						OLA somos Matias Luzi, Luciano Cabrera y Federico Chillo.
					</h5>
					<h6 style={{ textAlign: "center", marginTop: "2rem" }}>
						Colegiales, Buenos Aires, Argentina
					</h6>
				</AboutWrapper>
			</AboutContainer>

			<AboutContainer>
				<AboutWrapper>
					<MainText>We are OLA</MainText>
					<SubMainText>
						Our passion lies in creating a sound footprint.
					</SubMainText>
					<BodyText>
						Sound design, music composition, immersive audio for linear and
						non-linear media. We use field recording techniques, foley,
						synthesis and sampling.
					</BodyText>

					<h5 style={{ textAlign: "center", margin: "2rem" }}>
						OLA is Matias Luzi, Luciano Cabrera and Federico Chillo.
					</h5>
					<h6 style={{ textAlign: "center", marginTop: "2rem" }}>
						Colegiales, Buenos Aires, Argentina
					</h6>
				</AboutWrapper>
			</AboutContainer>
		</AboutFlexContainer>
	);
};

export default About;
